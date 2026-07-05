import type { Testimonial } from '../../entities/Testimonial'

export interface ITestimonialRepository {
  getAll(): Promise<Testimonial[]>
}
