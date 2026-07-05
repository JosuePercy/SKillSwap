import { useState, useEffect } from 'react'
import type { Feature } from '../../domain/entities/Feature'
import { container } from '../../shared/di/container'

interface UseFeaturesResult {
  features: Feature[]
  loading: boolean
}

export function useFeatures(): UseFeaturesResult {
  const [features, setFeatures] = useState<Feature[]>([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    container.getFeaturesUseCase.execute()
      .then(setFeatures)
      .finally(() => setLoading(false))
  }, [])

  return { features, loading }
}
