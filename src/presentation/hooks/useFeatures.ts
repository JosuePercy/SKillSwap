import { useState, useEffect, useMemo } from 'react'
import type { Feature } from '../../domain/entities/Feature'
import { container } from '../../shared/di/container'

interface UseFeaturesResult {
  features: Feature[]
  loading: boolean
  query: string
  setQuery: (q: string) => void
}

export function useFeatures(): UseFeaturesResult {
  const [allFeatures, setAllFeatures] = useState<Feature[]>([])
  const [loading, setLoading]         = useState(true)
  const [query, setQuery]             = useState('')

  useEffect(() => {
    container.getFeaturesUseCase.execute()
      .then(setAllFeatures)
      .finally(() => setLoading(false))
  }, [])

  const features = useMemo(() => {
    if (!query.trim()) return allFeatures
    const lower = query.toLowerCase()
    return allFeatures.filter(
      (f) =>
        f.title.toLowerCase().includes(lower) ||
        f.description.toLowerCase().includes(lower),
    )
  }, [allFeatures, query])

  return { features, loading, query, setQuery }
}
