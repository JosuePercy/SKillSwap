import type { BenefitGroup } from '../../domain/entities/BenefitGroup'
import type { IGetBenefitsUseCase } from '../ports/in/IGetBenefitsUseCase'
import type { IBenefitRepository } from '../ports/out/IBenefitRepository'

export class GetBenefitsUseCase implements IGetBenefitsUseCase {
  constructor(private readonly repository: IBenefitRepository) {}

  execute(): Promise<BenefitGroup[]> {
    return this.repository.getAll()
  }
}
