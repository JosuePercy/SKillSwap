import type { PlatformStat } from '../../../domain/entities/PlatformStat'

export interface IGetPlatformStatsUseCase {
  execute(): Promise<PlatformStat[]>
}
