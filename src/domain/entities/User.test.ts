import { describe, it, expect } from 'vitest'
import type { User, UserStatus } from '../../domain/entities/User'

// ── Lógica de negocio simulada ────────────────────────────────────────────

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isStrongPassword(password: string): boolean {
  return password.length >= 8
}

function registerUser(
  email: string,
  password: string,
  existingEmails: string[],
): User | { error: string } {
  if (!isValidEmail(email))      return { error: 'Email inválido' }
  if (!isStrongPassword(password)) return { error: 'Contraseña débil' }
  if (existingEmails.includes(email)) return { error: 'Email duplicado' }

  return {
    id: `user-${Date.now()}`,
    email,
    passwordHash: `hash_${password}`,
    status: 'pending_verification' as UserStatus,
    createdAt: new Date(),
  }
}

// ── PU-01: Registro de usuario ────────────────────────────────────────────

describe('PU-01 | Registro de usuario', () => {
  it('crea usuario con email y contraseña válidos', () => {
    const result = registerUser('nuevo@email.com', 'pass1234', [])
    expect('id' in result).toBe(true)
    if ('id' in result) {
      expect(result.email).toBe('nuevo@email.com')
      expect(result.status).toBe('pending_verification')
    }
  })

  it('caso erróneo: email duplicado -> debe rechazar', () => {
    const result = registerUser('ya@existe.com', 'pass1234', ['ya@existe.com'])
    expect('error' in result).toBe(true)
    if ('error' in result) expect(result.error).toBe('Email duplicado')
  })

  it('caso erróneo: contraseña débil -> error', () => {
    const result = registerUser('nuevo@email.com', '123', [])
    expect('error' in result).toBe(true)
    if ('error' in result) expect(result.error).toBe('Contraseña débil')
  })

  it('guarda el estado "pending_verification" al registrarse', () => {
    const result = registerUser('test@test.com', 'segura123', [])
    if ('id' in result) expect(result.status).toBe('pending_verification')
  })
})

// ── PU-02: Inicio de sesión ───────────────────────────────────────────────

type LoginResult =
  | { token: string }
  | { error: string }

function login(
  email: string,
  password: string,
  users: User[],
): LoginResult {
  const user = users.find((u) => u.email === email)
  if (!user)                             return { error: 'Usuario no encontrado' }
  if (user.status !== 'active')          return { error: 'Usuario no verificado -> acceso denegado' }
  if (user.passwordHash !== `hash_${password}`) return { error: 'Contraseña incorrecta' }
  return { token: `jwt_${user.id}` }
}

const activeUser: User = {
  id: 'u-1',
  email: 'activo@test.com',
  passwordHash: 'hash_pass1234',
  status: 'active',
  createdAt: new Date(),
}

const pendingUser: User = {
  id: 'u-2',
  email: 'pendiente@test.com',
  passwordHash: 'hash_pass1234',
  status: 'pending_verification',
  createdAt: new Date(),
}

describe('PU-02 | Inicio de sesión', () => {
  it('devuelve token JWT con credenciales correctas', () => {
    const result = login('activo@test.com', 'pass1234', [activeUser])
    expect('token' in result).toBe(true)
    if ('token' in result) expect(result.token).toBe('jwt_u-1')
  })

  it('caso erróneo: usuario no verificado -> acceso denegado', () => {
    const result = login('pendiente@test.com', 'pass1234', [pendingUser])
    expect('error' in result).toBe(true)
    if ('error' in result) expect(result.error).toContain('no verificado')
  })

  it('caso erróneo: contraseña incorrecta -> error', () => {
    const result = login('activo@test.com', 'wrongpass', [activeUser])
    expect('error' in result).toBe(true)
    if ('error' in result) expect(result.error).toContain('incorrecta')
  })
})
