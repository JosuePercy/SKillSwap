import type { Testimonial } from '../../domain/entities/Testimonial'
import type { ITestimonialRepository } from '../../application/ports/out/ITestimonialRepository'
import { API_BASE_URL } from '../config/apiUrl'

export class ApiTestimonialRepository implements ITestimonialRepository {
  async getAll(): Promise<Testimonial[]> {
    const res = await fetch(`${API_BASE_URL}/testimonials`)
    if (!res.ok) throw new Error('Error al cargar testimonios')
    return res.json() as Promise<Testimonial[]>
  }
}
