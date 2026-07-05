import type { FAQ } from '../../domain/entities/FAQ'
import type { IGetFAQsUseCase } from '../ports/in/IGetFAQsUseCase'
import type { IFAQRepository } from '../ports/out/IFAQRepository'

export class GetFAQsUseCase implements IGetFAQsUseCase {
  constructor(private readonly repository: IFAQRepository) {}

  execute(): Promise<FAQ[]> {
    return this.repository.getAll()
  }
}
