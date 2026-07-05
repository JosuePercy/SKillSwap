import type { Feature } from '../../domain/entities/Feature'
import type { IFeatureRepository } from '../../application/ports/out/IFeatureRepository'
import { API_BASE_URL } from '../config/apiUrl'

export class ApiFeatureRepository implements IFeatureRepository {
  async getAll(): Promise<Feature[]> {
    const res = await fetch(`${API_BASE_URL}/features`)
    if (!res.ok) throw new Error('Error al cargar características')
    return res.json() as Promise<Feature[]>
  }
}
