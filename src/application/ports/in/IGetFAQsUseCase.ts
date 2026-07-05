import type { FAQ } from '../../../domain/entities/FAQ'

export interface IGetFAQsUseCase {
  execute(): Promise<FAQ[]>
}
