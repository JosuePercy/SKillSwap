import type { Problem } from '../../domain/entities/Problem'
import type { IGetProblemsUseCase } from '../ports/in/IGetProblemsUseCase'
import type { IProblemRepository } from '../ports/out/IProblemRepository'

export class GetProblemsUseCase implements IGetProblemsUseCase {
  constructor(private readonly repository: IProblemRepository) {}

  execute(): Promise<Problem[]> {
    return this.repository.getAll()
  }
}
