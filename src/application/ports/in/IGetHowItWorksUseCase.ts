import type { HowItWorksStep } from '../../../domain/entities/HowItWorksStep'

export interface IGetHowItWorksUseCase {
  execute(): Promise<HowItWorksStep[]>
}
