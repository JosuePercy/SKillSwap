import type { PlatformStat } from '../../domain/entities/PlatformStat'
import type { IPlatformStatRepository } from '../../application/ports/out/IPlatformStatRepository'

const PLATFORM_STATS: PlatformStat[] = [
  { id: 'stat-1', value: '2,400+',  label: 'Usuarios activos' },
  { id: 'stat-2', value: '8,900+',  label: 'Intercambios completados' },
  { id: 'stat-3', value: '150+',    label: 'Habilidades disponibles' },
  { id: 'stat-4', value: '4.9/5',   label: 'Calificación promedio' },
]

export class InMemoryPlatformStatRepository implements IPlatformStatRepository {
  getAll(): Promise<PlatformStat[]> {
    return Promise.resolve(PLATFORM_STATS)
  }
}
