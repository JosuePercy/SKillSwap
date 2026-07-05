import type { HowItWorksStep } from '../../domain/entities/HowItWorksStep'
import type { IGetHowItWorksUseCase } from '../ports/in/IGetHowItWorksUseCase'
import type { IHowItWorksRepository } from '../ports/out/IHowItWorksRepository'

export class GetHowItWorksUseCase implements IGetHowItWorksUseCase {
  constructor(private readonly repository: IHowItWorksRepository) {}

  execute(): Promise<HowItWorksStep[]> {
    return this.repository.getAll()
  }
}
