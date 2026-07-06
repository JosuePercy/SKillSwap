import { describe, it, expect } from 'vitest'
import type { MatchRequest, RequestStatus } from '../../domain/entities/MatchRequest'
import type { SkillExchange, ExchangeRating } from '../../domain/entities/SkillExchange'

// ── Lógica de negocio simulada ────────────────────────────────────────────

function sendRequest(fromUserId: string, toUserId: string): MatchRequest | { error: string } {
  if (fromUserId === toUserId) return { error: 'No puedes enviarte solicitud a ti mismo' }
  return {
    id: `req-${Date.now()}`,
    fromUserId,
    toUserId,
    status: 'pending' as RequestStatus,
    createdAt: new Date(),
  }
}

function isChatEnabled(request: MatchRequest): boolean {
  return request.status === 'accepted'
}

function createSession(request: MatchRequest, date: Date): { sessionId: string; userAId: string; userBId: string; date: Date } | { error: string } {
  if (request.status !== 'accepted') return { error: 'Solo se puede agendar con intercambio activo' }
  return {
    sessionId: `session-${Date.now()}`,
    userAId: request.fromUserId,
    userBId: request.toUserId,
    date,
  }
}

function rateExchange(
  exchange: SkillExchange,
  fromUserId: string,
  toUserId: string,
  score: number,
  existing: ExchangeRating[],
): ExchangeRating | { error: string } {
  if (exchange.status !== 'completed') return { error: 'No se puede calificar si el intercambio está finalizado' }
  if (score < 1 || score > 5)          return { error: 'Calificación debe ser entre 1 y 5' }
  const alreadyRated = existing.some(
    (r) => r.exchangeId === exchange.id && r.fromUserId === fromUserId,
  )
  if (alreadyRated) return { error: 'Ya calificaste este intercambio' }
  return {
    id: `rating-${Date.now()}`,
    exchangeId: exchange.id,
    fromUserId,
    toUserId,
    score,
  }
}

function triggerNotification(
  event: 'request_sent' | 'request_accepted' | 'message' | 'session_created',
  toUserId: string,
): { channel: string; toUserId: string; event: string } {
  return { channel: 'in-app', toUserId, event }
}

// ── PI-03: Emparejamiento → Solicitud ─────────────────────────────────────

describe('PI-03 | Emparejamiento → Solicitud', () => {
  it('crea solicitud con IDs correctos desde la lista de matches', () => {
    const result = sendRequest('u-1', 'u-2')
    expect('id' in result).toBe(true)
    if ('id' in result) {
      expect(result.fromUserId).toBe('u-1')
      expect(result.toUserId).toBe('u-2')
      expect(result.status).toBe('pending')
    }
  })

  it('el receptor queda como destinatario de la solicitud', () => {
    const result = sendRequest('u-1', 'u-3')
    if ('id' in result) expect(result.toUserId).toBe('u-3')
  })
})

// ── PI-04: Solicitud → Chat ────────────────────────────────────────────────

const acceptedRequest: MatchRequest = {
  id: 'req-1', fromUserId: 'u-1', toUserId: 'u-2',
  status: 'accepted', createdAt: new Date(),
}
const pendingRequest: MatchRequest = {
  id: 'req-2', fromUserId: 'u-1', toUserId: 'u-2',
  status: 'pending', createdAt: new Date(),
}

describe('PI-04 | Solicitud → Chat', () => {
  it('chat habilitado cuando la solicitud está aceptada', () => {
    expect(isChatEnabled(acceptedRequest)).toBe(true)
  })

  it('chat NO habilitado si la solicitud está pendiente', () => {
    expect(isChatEnabled(pendingRequest)).toBe(false)
  })
})

// ── PI-05: Chat → Agenda ───────────────────────────────────────────────────

describe('PI-05 | Chat → Agenda', () => {
  it('crea sesión con los datos del intercambio aceptado', () => {
    const date = new Date('2026-07-10T10:00:00')
    const result = createSession(acceptedRequest, date)
    expect('sessionId' in result).toBe(true)
    if ('sessionId' in result) {
      expect(result.userAId).toBe('u-1')
      expect(result.userBId).toBe('u-2')
      expect(result.date).toEqual(date)
    }
  })

  it('caso erróneo: no se puede agendar con solicitud pendiente', () => {
    const result = createSession(pendingRequest, new Date())
    expect('error' in result).toBe(true)
  })
})

// ── PI-06: Intercambio → Calificación ─────────────────────────────────────

const completedExchange: SkillExchange = {
  id: 'exc-1', requestId: 'req-1', userAId: 'u-1', userBId: 'u-2', status: 'completed',
}
const activeExchange: SkillExchange = {
  id: 'exc-2', requestId: 'req-2', userAId: 'u-1', userBId: 'u-2', status: 'active',
}

describe('PI-06 | Intercambio → Calificación', () => {
  it('ambos usuarios pueden calificarse mutuamente', () => {
    const r1 = rateExchange(completedExchange, 'u-1', 'u-2', 5, [])
    const r2 = rateExchange(completedExchange, 'u-2', 'u-1', 4, [])
    expect('id' in r1).toBe(true)
    expect('id' in r2).toBe(true)
  })

  it('caso erróneo: cada usuario solo puede calificar una vez', () => {
    const existing: ExchangeRating[] = [
      { id: 'r-1', exchangeId: 'exc-1', fromUserId: 'u-1', toUserId: 'u-2', score: 5 },
    ]
    const result = rateExchange(completedExchange, 'u-1', 'u-2', 4, existing)
    expect('error' in result).toBe(true)
    if ('error' in result) expect(result.error).toContain('Ya calificaste')
  })

  it('caso erróneo: no se puede calificar si intercambio no está finalizado', () => {
    const result = rateExchange(activeExchange, 'u-1', 'u-2', 5, [])
    expect('error' in result).toBe(true)
    if ('error' in result) expect(result.error).toContain('finalizado')
  })

  it('calificación fuera de rango es rechazada', () => {
    const result = rateExchange(completedExchange, 'u-1', 'u-2', 6, [])
    expect('error' in result).toBe(true)
  })
})

// ── PI-07: Solicitud → Notificaciones ─────────────────────────────────────

describe('PI-07 | Solicitud → Notificaciones', () => {
  it('dispara notificación in-app al enviar solicitud', () => {
    const notif = triggerNotification('request_sent', 'u-2')
    expect(notif.toUserId).toBe('u-2')
    expect(notif.event).toBe('request_sent')
    expect(notif.channel).toBe('in-app')
  })

  it('dispara notificación al aceptar solicitud', () => {
    const notif = triggerNotification('request_accepted', 'u-1')
    expect(notif.event).toBe('request_accepted')
  })

  it('dispara notificación al recibir mensaje', () => {
    const notif = triggerNotification('message', 'u-2')
    expect(notif.event).toBe('message')
  })

  it('dispara notificación al crear sesión', () => {
    const notif = triggerNotification('session_created', 'u-2')
    expect(notif.event).toBe('session_created')
  })
})
