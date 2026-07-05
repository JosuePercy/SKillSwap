import type { PlatformStat } from '../../entities/PlatformStat'

export interface IPlatformStatRepository {
  getAll(): Promise<PlatformStat[]>
}
