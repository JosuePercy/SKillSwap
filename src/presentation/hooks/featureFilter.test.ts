import { describe, it, expect } from 'vitest'
import type { Feature } from '../../domain/entities/Feature'

// Lógica de filtrado extraída del hook useFeatures
function filterFeatures(features: Feature[], query: string): Feature[] {
  if (!query.trim()) return features
  const lower = query.toLowerCase()
  return features.filter(
    (f) =>
      f.title.toLowerCase().includes(lower) ||
      f.description.toLowerCase().includes(lower),
  )
}

const MOCK_FEATURES: Feature[] = [
  {
    id: '1',
    icon: '🎯',
    title: 'Matching Inteligente',
    description: 'Conecta con personas según tus habilidades',
    gradient: '',
    light: '',
    border: '',
  },
  {
    id: '2',
    icon: '💬',
    title: 'Chat Integrado',
    description: 'Comunícate directamente con otros usuarios',
    gradient: '',
    light: '',
    border: '',
  },
  {
    id: '3',
    icon: '⭐',
    title: 'Sistema de Reputación',
    description: 'Calificaciones y reseñas verificadas',
    gradient: '',
    light: '',
    border: '',
  },
]

describe('Filtro de búsqueda de Features', () => {
  it('sin query retorna todos los resultados', () => {
    expect(filterFeatures(MOCK_FEATURES, '')).toHaveLength(3)
  })

  it('filtra por título (case-insensitive)', () => {
    const result = filterFeatures(MOCK_FEATURES, 'chat')
    expect(result).toHaveLength(1)
    expect(result[0].title).toBe('Chat Integrado')
  })

  it('filtra por descripción', () => {
    const result = filterFeatures(MOCK_FEATURES, 'calificaciones')
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('3')
  })

  it('retorna vacío si no hay coincidencias', () => {
    const result = filterFeatures(MOCK_FEATURES, 'xyzxyz')
    expect(result).toHaveLength(0)
  })

  it('query de solo espacios retorna todos', () => {
    expect(filterFeatures(MOCK_FEATURES, '   ')).toHaveLength(3)
  })
})
