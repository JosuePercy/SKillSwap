import type { BenefitGroup } from '../../../domain/entities/BenefitGroup'

export interface IBenefitRepository {
  getAll(): Promise<BenefitGroup[]>
}
