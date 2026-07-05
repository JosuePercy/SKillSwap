import type { Testimonial } from '../../../domain/entities/Testimonial'

export interface ITestimonialRepository {
  getAll(): Promise<Testimonial[]>
}
