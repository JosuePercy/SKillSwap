import type { Problem } from '../../../domain/entities/Problem'

export interface IGetProblemsUseCase {
  execute(): Promise<Problem[]>
}
