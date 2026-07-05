import { useState, useEffect } from 'react'
import type { HowItWorksStep } from '../../domain/entities/HowItWorksStep'
import { container } from '../../shared/di/container'

interface UseHowItWorksResult {
  steps: HowItWorksStep[]
  loading: boolean
}

export function useHowItWorks(): UseHowItWorksResult {
  const [steps, setSteps]     = useState<HowItWorksStep[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    container.getHowItWorksUseCase.execute()
      .then(setSteps)
      .finally(() => setLoading(false))
  }, [])

  return { steps, loading }
}
