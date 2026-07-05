import type { PlatformStat } from '../../../domain/entities/PlatformStat'

export interface IPlatformStatRepository {
  getAll(): Promise<PlatformStat[]>
}
