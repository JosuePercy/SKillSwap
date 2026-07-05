import type { Problem } from '../../../domain/entities/Problem'

export interface IProblemRepository {
  getAll(): Promise<Problem[]>
}
