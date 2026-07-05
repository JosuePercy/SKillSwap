import { useState, useEffect } from 'react'
import type { Testimonial } from '../../domain/entities/Testimonial'
import { container } from '../../shared/di/container'

interface UseTestimonialsResult {
  testimonials: Testimonial[]
  loading: boolean
}

export function useTestimonials(): UseTestimonialsResult {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading]           = useState(true)

  useEffect(() => {
    container.getTestimonialsUseCase.execute()
      .then(setTestimonials)
      .finally(() => setLoading(false))
  }, [])

  return { testimonials, loading }
}
