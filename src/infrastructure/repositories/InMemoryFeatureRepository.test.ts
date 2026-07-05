import { describe, it, expect } from 'vitest'
import { InMemoryFeatureRepository } from '../../infrastructure/repositories/InMemoryFeatureRepository'

describe('InMemoryFeatureRepository', () => {
  const repo = new InMemoryFeatureRepository()

  it('retorna una lista de features', async () => {
    const features = await repo.getAll()
    expect(features.length).toBeGreaterThan(0)
  })

  it('cada feature tiene id, título e ícono', async () => {
    const features = await repo.getAll()
    for (const f of features) {
      expect(f.id).toBeTruthy()
      expect(f.title).toBeTruthy()
      expect(f.icon).toBeTruthy()
    }
  })

  it('contiene exactamente 6 características', async () => {
    const features = await repo.getAll()
    expect(features).toHaveLength(6)
  })
})
