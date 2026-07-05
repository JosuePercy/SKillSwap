import type { Testimonial } from '../../domain/entities/Testimonial'
import type { IGetTestimonialsUseCase } from '../ports/in/IGetTestimonialsUseCase'
import type { ITestimonialRepository } from '../ports/out/ITestimonialRepository'

export class GetTestimonialsUseCase implements IGetTestimonialsUseCase {
  constructor(private readonly repository: ITestimonialRepository) {}

  execute(): Promise<Testimonial[]> {
    return this.repository.getAll()
  }
}
