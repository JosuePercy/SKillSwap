import type { Problem } from '../../domain/entities/Problem'
import type { IProblemRepository } from '../../application/ports/out/IProblemRepository'

const PROBLEMS: Problem[] = [
  {
    id: 'problem-1',
    icon: '💸',
    title: 'Cursos costosos',
    description:
      'El 60% de jóvenes en América Latina no pueden costear educación especializada fuera del sistema formal. Los precios de plataformas como Coursera o Udemy siguen siendo inaccesibles.',
    stat: '60%',
    statLabel: 'no puede pagar cursos',
    color: 'from-red-50 to-rose-50',
    border: 'border-red-100',
    iconBg: 'bg-red-100',
    statColor: 'text-red-600',
  },
  {
    id: 'problem-2',
    icon: '🗂️',
    title: 'Información dispersa',
    description:
      'Los usuarios tienen que navegar entre múltiples aplicaciones, grupos de Facebook, Reddit y Telegram solo para encontrar a alguien dispuesto a enseñar. No hay una plataforma centralizada.',
    stat: '5+',
    statLabel: 'apps para una sola tarea',
    color: 'from-amber-50 to-yellow-50',
    border: 'border-amber-100',
    iconBg: 'bg-amber-100',
    statColor: 'text-amber-600',
  },
  {
    id: 'problem-3',
    icon: '🔒',
    title: 'Falta de confianza',
    description:
      'Sin un sistema de reputación, verificación y calificaciones, es imposible saber si la persona que vas a contactar es confiable, experta y comprometida con el intercambio.',
    stat: '78%',
    statLabel: 'desconfía de desconocidos online',
    color: 'from-slate-50 to-gray-50',
    border: 'border-slate-100',
    iconBg: 'bg-slate-100',
    statColor: 'text-slate-600',
  },
]

export class InMemoryProblemRepository implements IProblemRepository {
  getAll(): Promise<Problem[]> {
    return Promise.resolve(PROBLEMS)
  }
}
