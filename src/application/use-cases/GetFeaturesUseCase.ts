import type { Feature } from '../../domain/entities/Feature'
import type { IGetFeaturesUseCase } from '../ports/in/IGetFeaturesUseCase'
import type { IFeatureRepository } from '../ports/out/IFeatureRepository'

export class GetFeaturesUseCase implements IGetFeaturesUseCase {
  constructor(private readonly repository: IFeatureRepository) {}

  execute(): Promise<Feature[]> {
    return this.repository.getAll()
  }
}
