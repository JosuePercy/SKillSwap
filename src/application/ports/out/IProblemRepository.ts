import type { Problem } from '../../entities/Problem'

export interface IProblemRepository {
  getAll(): Promise<Problem[]>
}
