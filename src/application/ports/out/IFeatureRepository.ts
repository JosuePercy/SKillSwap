import type { Feature } from '../../../domain/entities/Feature'

export interface IFeatureRepository {
  getAll(): Promise<Feature[]>
}
