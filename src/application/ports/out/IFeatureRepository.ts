import type { Feature } from '../../entities/Feature'

export interface IFeatureRepository {
  getAll(): Promise<Feature[]>
}
