import type { BenefitGroup } from '../../domain/entities/BenefitGroup'
import type { IBenefitRepository } from '../../application/ports/out/IBenefitRepository'
import { API_BASE_URL } from '../config/apiUrl'

export class ApiBenefitRepository implements IBenefitRepository {
  async getAll(): Promise<BenefitGroup[]> {
    const res = await fetch(`${API_BASE_URL}/benefits`)
    if (!res.ok) throw new Error('Error al cargar beneficios')
    return res.json() as Promise<BenefitGroup[]>
  }
}
