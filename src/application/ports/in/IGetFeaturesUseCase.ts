import type { Feature } from '../../../domain/entities/Feature'

export interface IGetFeaturesUseCase {
  execute(): Promise<Feature[]>
}
