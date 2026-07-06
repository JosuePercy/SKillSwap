import { describe, it, expect } from 'vitest'
import type { UserProfile } from '../../domain/entities/UserProfile'
import type { UserSkill, SkillLevel, SkillMode } from '../../domain/entities/UserSkill'

// ── Lógica de negocio simulada ────────────────────────────────────────────

function createProfile(
  data: Partial<UserProfile> & { userId: string },
): UserProfile | { error: string } {
  if (!data.name?.trim())     return { error: 'Nombre es obligatorio' }
  if (!data.bio?.trim())      return { error: 'Bio es obligatoria' }
  if (!data.location?.trim()) return { error: 'Ubicación es obligatoria' }
  return {
    userId:   data.userId,
    name:     data.name,
    bio:      data.bio,
    location: data.location,
    avatarUrl: data.avatarUrl,
  }
}

const VALID_LEVELS: SkillLevel[] = ['basic', 'intermediate', 'advanced']
const VALID_MODES:  SkillMode[]  = ['teach', 'learn']

function addSkill(
  userId: string,
  skill: string,
  level: SkillLevel,
  mode: SkillMode,
  existing: UserSkill[],
): UserSkill | { error: string } {
  if (!VALID_LEVELS.includes(level)) return { error: 'Nivel inválido' }
  if (!VALID_MODES.includes(mode))   return { error: 'Modo inválido' }

  const duplicate = existing.find(
    (s) => s.userId === userId && s.skill === skill && s.mode === mode,
  )
  if (duplicate) return { error: 'Habilidad duplicada para el mismo usuario' }

  return { id: `skill-${Date.now()}`, userId, skill, level, mode }
}

function searchUsers(
  skills: UserSkill[],
  filterSkill: string,
  filterMode: SkillMode,
): string[] {
  return [
    ...new Set(
      skills
        .filter(
          (s) =>
            s.skill.toLowerCase() === filterSkill.toLowerCase() &&
            s.mode === filterMode,
        )
        .map((s) => s.userId),
    ),
  ]
}

function searchUsersSafe(
  skills: UserSkill[],
  filterSkill: string,
  filterMode: string,
): string[] | { error: string } {
  if (!filterSkill.trim()) return { error: 'Filtro de habilidad inválido' }
  if (filterMode !== 'teach' && filterMode !== 'learn') {
    return { error: 'Filtro de modo inválido' }
  }
  return searchUsers(skills, filterSkill, filterMode)
}

// ── PU-03: Creación de perfil ─────────────────────────────────────────────

describe('PU-03 | Creación de perfil', () => {
  it('crea perfil con datos completos asociado a un userId', () => {
    const result = createProfile({
      userId: 'u-1',
      name: 'Carlos López',
      bio: 'Dev apasionado',
      location: 'Lima',
    })
    expect('userId' in result).toBe(true)
    if ('userId' in result) expect(result.userId).toBe('u-1')
  })

  it('caso erróneo: nombre faltante -> error', () => {
    const result = createProfile({ userId: 'u-1', bio: 'bio', location: 'Lima' })
    expect('error' in result).toBe(true)
  })

  it('caso erróneo: bio faltante -> error', () => {
    const result = createProfile({ userId: 'u-1', name: 'Carlos', location: 'Lima' })
    expect('error' in result).toBe(true)
  })

  it('caso erróneo: ubicación faltante -> error', () => {
    const result = createProfile({ userId: 'u-1', name: 'Carlos', bio: 'bio' })
    expect('error' in result).toBe(true)
  })
})

// ── PU-04: Agregar habilidad ──────────────────────────────────────────────

describe('PU-04 | Agregar habilidad', () => {
  it('asocia habilidad {Inglés, intermedio, enseñar} al perfil del usuario', () => {
    const result = addSkill('u-1', 'Inglés', 'intermediate', 'teach', [])
    expect('id' in result).toBe(true)
    if ('id' in result) {
      expect(result.skill).toBe('Inglés')
      expect(result.level).toBe('intermediate')
      expect(result.mode).toBe('teach')
      expect(result.userId).toBe('u-1')
    }
  })

  it('caso erróneo: habilidad duplicada -> actualizar o rechazar', () => {
    const existing: UserSkill[] = [
      { id: 's-1', userId: 'u-1', skill: 'Inglés', level: 'intermediate', mode: 'teach' },
    ]
    const result = addSkill('u-1', 'Inglés', 'advanced', 'teach', existing)
    expect('error' in result).toBe(true)
    if ('error' in result) expect(result.error).toContain('duplicada')
  })

  it('permite misma habilidad con distinto modo (teach vs learn)', () => {
    const existing: UserSkill[] = [
      { id: 's-1', userId: 'u-1', skill: 'Inglés', level: 'intermediate', mode: 'teach' },
    ]
    const result = addSkill('u-1', 'Inglés', 'basic', 'learn', existing)
    expect('id' in result).toBe(true)
  })
})

// ── PU-05: Buscar usuarios ────────────────────────────────────────────────

const SKILLS_DB: UserSkill[] = [
  { id: 's-1', userId: 'u-1', skill: 'Yoga',  level: 'advanced',     mode: 'teach' },
  { id: 's-2', userId: 'u-2', skill: 'Yoga',  level: 'intermediate', mode: 'teach' },
  { id: 's-3', userId: 'u-3', skill: 'Inglés', level: 'basic',       mode: 'learn' },
  { id: 's-4', userId: 'u-4', skill: 'Yoga',  level: 'basic',        mode: 'learn' },
]

describe('PU-05 | Buscar usuarios', () => {
  it('filtra por habilidad=Yoga y modo=teach -> solo usuarios que cumplen', () => {
    const result = searchUsers(SKILLS_DB, 'Yoga', 'teach')
    expect(result).toContain('u-1')
    expect(result).toContain('u-2')
    expect(result).not.toContain('u-3')
    expect(result).not.toContain('u-4')
  })

  it('caso erróneo: sin resultados -> lista vacía', () => {
    const result = searchUsers(SKILLS_DB, 'Python', 'learn')
    expect(result).toHaveLength(0)
  })

  it('no devuelve usuarios duplicados', () => {
    const result = searchUsers(SKILLS_DB, 'Yoga', 'teach')
    const unique = new Set(result)
    expect(result.length).toBe(unique.size)
  })

  it('caso erróneo: filtros inválidos -> error controlado', () => {
    const invalidMode = searchUsersSafe(SKILLS_DB, 'Yoga', 'otro')
    const invalidSkill = searchUsersSafe(SKILLS_DB, '  ', 'learn')

    expect('error' in invalidMode).toBe(true)
    expect('error' in invalidSkill).toBe(true)
  })
})
