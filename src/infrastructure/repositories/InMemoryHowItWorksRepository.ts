import type { HowItWorksStep } from '../../domain/entities/HowItWorksStep'
import type { IHowItWorksRepository } from '../../application/ports/out/IHowItWorksRepository'

const STEPS: HowItWorksStep[] = [
  {
    id: 'step-1',
    number: '01',
    icon: '👤',
    title: 'Crea tu perfil',
    description: 'Regístrate en segundos. Añade tu foto, experiencia y una breve descripción sobre ti.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    id: 'step-2',
    number: '02',
    icon: '🎓',
    title: 'Agrega tus habilidades',
    description: 'Publica las habilidades que dominas: programación, diseño, idiomas, música, cocina y más.',
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50',
  },
  {
    id: 'step-3',
    number: '03',
    icon: '🎯',
    title: 'Indica qué deseas aprender',
    description: 'Selecciona las habilidades que quieres adquirir. Esto activa nuestro motor de matching.',
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    id: 'step-4',
    number: '04',
    icon: '🤝',
    title: 'Encuentra personas compatibles',
    description: 'El algoritmo encuentra perfiles que tienen lo que tú buscas y buscan lo que tú ofreces.',
    color: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50',
  },
  {
    id: 'step-5',
    number: '05',
    icon: '🔄',
    title: 'Realiza el intercambio',
    description: 'Coordina horarios por chat, agenda tu sesión y realiza el intercambio presencial o virtual.',
    color: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50',
  },
  {
    id: 'step-6',
    number: '06',
    icon: '⭐',
    title: 'Califica la experiencia',
    description: 'Al finalizar, ambas partes se califican mutuamente. Construyes reputación con cada sesión.',
    color: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50',
  },
]

export class InMemoryHowItWorksRepository implements IHowItWorksRepository {
  getAll(): Promise<HowItWorksStep[]> {
    return Promise.resolve(STEPS)
  }
}
