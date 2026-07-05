import { useState, useEffect } from 'react'
import type { Problem } from '../../domain/entities/Problem'
import { container } from '../../shared/di/container'

interface UseProblemsResult {
  problems: Problem[]
  loading: boolean
}

export function useProblems(): UseProblemsResult {
  const [problems, setProblems] = useState<Problem[]>([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    container.getProblemsUseCase.execute()
      .then(setProblems)
      .finally(() => setLoading(false))
  }, [])

  return { problems, loading }
}
