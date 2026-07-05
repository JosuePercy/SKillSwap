import type { BenefitGroup } from '../../entities/BenefitGroup'

export interface IBenefitRepository {
  getAll(): Promise<BenefitGroup[]>
}
