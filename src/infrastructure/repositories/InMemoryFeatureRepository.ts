import type { Feature } from '../../domain/entities/Feature'
import type { IFeatureRepository } from '../../application/ports/out/IFeatureRepository'

const FEATURES: Feature[] = [
  {
    id: 'feature-1',
    icon: '🎯',
    title: 'Matching Inteligente',
    description:
      'Nuestro algoritmo analiza tus habilidades e intereses para conectarte automáticamente con personas que tienen exactamente lo que necesitas.',
    gradient: 'from-blue-500 to-blue-600',
    light: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    id: 'feature-2',
    icon: '💬',
    title: 'Chat Integrado',
    description:
      'Comunícate directamente con otros usuarios para acordar horarios, modalidades y los detalles del intercambio, todo dentro de la plataforma.',
    gradient: 'from-violet-500 to-violet-600',
    light: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    id: 'feature-3',
    icon: '⭐',
    title: 'Sistema de Reputación',
    description:
      'Calificaciones, reseñas y badges verificados construyen la confianza de cada usuario. Sabe exactamente con quién estás aprendiendo.',
    gradient: 'from-amber-500 to-amber-600',
    light: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    id: 'feature-4',
    icon: '📅',
    title: 'Agenda de Sesiones',
    description:
      'Programa sesiones presenciales o virtuales directamente desde la app. Gestiona tu calendario de intercambios de forma sencilla.',
    gradient: 'from-emerald-500 to-emerald-600',
    light: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    id: 'feature-5',
    icon: '📹',
    title: 'Videollamadas',
    description:
      'Realiza intercambios desde cualquier lugar del mundo con videollamadas integradas. Sin necesidad de usar herramientas externas.',
    gradient: 'from-rose-500 to-rose-600',
    light: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    id: 'feature-6',
    icon: '🏆',
    title: 'Sistema de Puntos',
    description:
      'Gana puntos por cada intercambio completado. Úsalos para acceder a sesiones adicionales y desbloquear funciones premium de la plataforma.',
    gradient: 'from-indigo-500 to-indigo-600',
    light: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
]

export class InMemoryFeatureRepository implements IFeatureRepository {
  getAll(): Promise<Feature[]> {
    return Promise.resolve(FEATURES)
  }
}
