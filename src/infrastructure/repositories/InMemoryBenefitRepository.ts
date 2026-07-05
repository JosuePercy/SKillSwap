import type { BenefitGroup } from '../../domain/entities/BenefitGroup'
import type { IBenefitRepository } from '../../application/ports/out/IBenefitRepository'

const BENEFIT_GROUPS: BenefitGroup[] = [
  {
    id: 'benefit-students',
    audience: 'Estudiantes',
    icon: '🎓',
    gradient: 'from-blue-500 to-blue-600',
    bg: 'from-blue-50 to-blue-50/50',
    border: 'border-blue-100',
    check: 'text-blue-600',
    benefits: [
      'Aprende habilidades prácticas sin pagar cursos',
      'Complementa tu formación universitaria',
      'Construye un portafolio real enseñando',
      'Conecta con otros estudiantes de tu área',
      'Gana experiencia práctica antes de graduarte',
      'Acceso a tutorías especializadas gratuitas',
    ],
  },
  {
    id: 'benefit-professionals',
    audience: 'Profesionales',
    icon: '💼',
    gradient: 'from-violet-500 to-violet-600',
    bg: 'from-violet-50 to-violet-50/50',
    border: 'border-violet-100',
    check: 'text-violet-600',
    benefits: [
      'Desarrolla nuevas habilidades sin invertir dinero',
      'Actualízate con tecnologías emergentes',
      'Expande tu red profesional de forma orgánica',
      'Refuerza y valida tu conocimiento enseñando',
      'Flexibilidad total de horarios y modalidad',
      'Acceso a un mercado global de aprendizaje',
    ],
  },
  {
    id: 'benefit-community',
    audience: 'Comunidad',
    icon: '🌍',
    gradient: 'from-emerald-500 to-emerald-600',
    bg: 'from-emerald-50 to-emerald-50/50',
    border: 'border-emerald-100',
    check: 'text-emerald-600',
    benefits: [
      'Democratiza el acceso al aprendizaje',
      'Elimina las barreras económicas educativas',
      'Genera conexiones humanas reales',
      'Preserva y transfiere conocimiento local',
      'Sistema de confianza basado en reputación',
      'Impacto social positivo y medible',
    ],
  },
]

export class InMemoryBenefitRepository implements IBenefitRepository {
  getAll(): Promise<BenefitGroup[]> {
    return Promise.resolve(BENEFIT_GROUPS)
  }
}
