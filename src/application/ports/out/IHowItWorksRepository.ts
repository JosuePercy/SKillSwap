import type { HowItWorksStep } from '../../entities/HowItWorksStep'

export interface IHowItWorksRepository {
  getAll(): Promise<HowItWorksStep[]>
}
