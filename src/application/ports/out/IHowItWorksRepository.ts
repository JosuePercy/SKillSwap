import type { HowItWorksStep } from '../../../domain/entities/HowItWorksStep'

export interface IHowItWorksRepository {
  getAll(): Promise<HowItWorksStep[]>
}
