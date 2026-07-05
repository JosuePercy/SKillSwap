import type { FAQ } from '../../../domain/entities/FAQ'

export interface IFAQRepository {
  getAll(): Promise<FAQ[]>
}
