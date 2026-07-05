import type { FAQ } from '../../domain/entities/FAQ'
import type { IFAQRepository } from '../../application/ports/out/IFAQRepository'
import { API_BASE_URL } from '../config/apiUrl'

export class ApiFAQRepository implements IFAQRepository {
  async getAll(): Promise<FAQ[]> {
    const res = await fetch(`${API_BASE_URL}/faqs`)
    if (!res.ok) throw new Error('Error al cargar preguntas frecuentes')
    return res.json() as Promise<FAQ[]>
  }
}
