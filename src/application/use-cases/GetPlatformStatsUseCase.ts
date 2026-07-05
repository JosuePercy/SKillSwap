import type { PlatformStat } from '../../domain/entities/PlatformStat'
import type { IGetPlatformStatsUseCase } from '../ports/in/IGetPlatformStatsUseCase'
import type { IPlatformStatRepository } from '../ports/out/IPlatformStatRepository'

export class GetPlatformStatsUseCase implements IGetPlatformStatsUseCase {
  constructor(private readonly repository: IPlatformStatRepository) {}

  execute(): Promise<PlatformStat[]> {
    return this.repository.getAll()
  }
}
