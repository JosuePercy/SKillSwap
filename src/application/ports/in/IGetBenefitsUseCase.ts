import type { BenefitGroup } from '../../../domain/entities/BenefitGroup'

export interface IGetBenefitsUseCase {
  execute(): Promise<BenefitGroup[]>
}
