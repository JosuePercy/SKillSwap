import type { Testimonial } from '../../../domain/entities/Testimonial'

export interface IGetTestimonialsUseCase {
  execute(): Promise<Testimonial[]>
}
