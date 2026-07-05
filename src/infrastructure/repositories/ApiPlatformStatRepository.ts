import type { PlatformStat } from '../../domain/entities/PlatformStat'
import type { IPlatformStatRepository } from '../../application/ports/out/IPlatformStatRepository'
import { API_BASE_URL } from '../config/apiUrl'

export class ApiPlatformStatRepository implements IPlatformStatRepository {
  async getAll(): Promise<PlatformStat[]> {
    const res = await fetch(`${API_BASE_URL}/platform-stats`)
    if (!res.ok) throw new Error('Error al cargar estadísticas')
    return res.json() as Promise<PlatformStat[]>
  }
}
