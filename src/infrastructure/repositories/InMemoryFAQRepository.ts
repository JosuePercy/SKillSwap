import type { FAQ } from '../../domain/entities/FAQ'
import type { IFAQRepository } from '../../application/ports/out/IFAQRepository'

const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: '¿Necesito pagar para usar SkillSwap?',
    answer:
      'No. SkillSwap es completamente gratuito para intercambios de habilidades. Nuestra misión es democratizar el acceso al aprendizaje eliminando las barreras económicas. Existe un plan premium opcional que desbloquea funciones adicionales, pero el intercambio de habilidades siempre será gratis.',
  },
  {
    id: 'faq-2',
    question: '¿Cómo funciona exactamente el intercambio?',
    answer:
      'El proceso es sencillo: tú publicas una habilidad que dominas y otra que quieres aprender. El algoritmo encuentra personas con perfiles complementarios. Ambos se contactan por chat, acuerdan los términos (horarios, número de sesiones, modalidad) y realizan el intercambio. Al terminar, ambas partes se califican mutuamente.',
  },
  {
    id: 'faq-3',
    question: '¿Puedo realizar las sesiones de forma virtual?',
    answer:
      'Sí. SkillSwap tiene videollamadas integradas para que puedas realizar intercambios desde cualquier parte del mundo sin necesidad de herramientas externas. También puedes coordinar sesiones presenciales si ambas partes están en la misma ciudad.',
  },
  {
    id: 'faq-4',
    question: '¿Cómo funciona el sistema de reputación?',
    answer:
      'Después de cada sesión completada, ambos usuarios se califican con estrellas (1-5) y pueden dejar una reseña escrita. El promedio de calificaciones forma la reputación del perfil. Los perfiles con alta reputación obtienen mayor visibilidad en los resultados de búsqueda y generan más confianza en la comunidad.',
  },
  {
    id: 'faq-5',
    question: '¿Qué sucede si una sesión es cancelada?',
    answer:
      'Si una sesión es cancelada con al menos 24 horas de anticipación, no hay penalización. Cancelaciones frecuentes o de último momento afectan el índice de confiabilidad del perfil. Si el otro usuario cancela sin aviso, puedes reportar el incidente y el sistema te protege con prioridad en las siguientes búsquedas.',
  },
]

export class InMemoryFAQRepository implements IFAQRepository {
  getAll(): Promise<FAQ[]> {
    return Promise.resolve(FAQS)
  }
}
