import type { FAQ } from '../../entities/FAQ'

export interface IFAQRepository {
  getAll(): Promise<FAQ[]>
}
