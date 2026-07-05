import { useState, useEffect } from 'react'
import type { FAQ } from '../../domain/entities/FAQ'
import { container } from '../../shared/di/container'

interface UseFAQsResult {
  faqs: FAQ[]
  loading: boolean
}

export function useFAQs(): UseFAQsResult {
  const [faqs, setFaqs]       = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    container.getFAQsUseCase.execute()
      .then(setFaqs)
      .finally(() => setLoading(false))
  }, [])

  return { faqs, loading }
}
