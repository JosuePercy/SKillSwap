import { useState, useEffect } from 'react'
import type { BenefitGroup } from '../../domain/entities/BenefitGroup'
import type { PlatformStat } from '../../domain/entities/PlatformStat'
import { container } from '../../shared/di/container'

interface UseBenefitsResult {
  groups: BenefitGroup[]
  stats: PlatformStat[]
  loading: boolean
}

export function useBenefits(): UseBenefitsResult {
  const [groups, setGroups]   = useState<BenefitGroup[]>([])
  const [stats, setStats]     = useState<PlatformStat[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      container.getBenefitsUseCase.execute(),
      container.getPlatformStatsUseCase.execute(),
    ]).then(([g, s]) => {
      setGroups(g)
      setStats(s)
    }).finally(() => setLoading(false))
  }, [])

  return { groups, stats, loading }
}
