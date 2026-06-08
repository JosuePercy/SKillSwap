import { useState } from 'react'

const faqs = [
  {
    q: '¿Necesito pagar para usar SkillSwap?',
    a: 'No. SkillSwap es completamente gratuito para intercambios de habilidades. Nuestra misión es democratizar el acceso al aprendizaje eliminando las barreras económicas. Existe un plan premium opcional que desbloquea funciones adicionales, pero el intercambio de habilidades siempre será gratis.',
  },
  {
    q: '¿Cómo funciona exactamente el intercambio?',
    a: 'El proceso es sencillo: tú publicas una habilidad que dominas y otra que quieres aprender. El algoritmo encuentra personas con perfiles complementarios. Ambos se contactan por chat, acuerdan los términos (horarios, número de sesiones, modalidad) y realizan el intercambio. Al terminar, ambas partes se califican mutuamente.',
  },
  {
    q: '¿Puedo realizar las sesiones de forma virtual?',
    a: 'Sí. SkillSwap tiene videollamadas integradas para que puedas realizar intercambios desde cualquier parte del mundo sin necesidad de herramientas externas. También puedes coordinar sesiones presenciales si ambas partes están en la misma ciudad.',
  },
  {
    q: '¿Cómo funciona el sistema de reputación?',
    a: 'Después de cada sesión completada, ambos usuarios se califican con estrellas (1-5) y pueden dejar una reseña escrita. El promedio de calificaciones forma la reputación del perfil. Los perfiles con alta reputación obtienen mayor visibilidad en los resultados de búsqueda y generan más confianza en la comunidad.',
  },
  {
    q: '¿Qué sucede si una sesión es cancelada?',
    a: 'Si una sesión es cancelada con al menos 24 horas de anticipación, no hay penalización. Cancelaciones frecuentes o de último momento afectan el índice de confiabilidad del perfil. Si el otro usuario cancela sin aviso, puedes reportar el incidente y el sistema te protege con prioridad en las siguientes búsquedas.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium">
            Preguntas frecuentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Resolvemos tus{' '}
            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              dudas.
            </span>
          </h2>
          <p className="text-lg text-slate-500">
            ¿Tienes más preguntas? Contáctanos en{' '}
            <a href="mailto:hola@skillswap.app" className="text-blue-600 hover:underline font-medium">
              hola@skillswap.app
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen ? 'border-blue-200 bg-blue-50/30' : 'border-slate-100 bg-white hover:border-slate-200'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-sm sm:text-base ${isOpen ? 'text-blue-700' : 'text-slate-900'}`}>
                    {faq.q}
                  </span>
                  <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-45' : 'bg-slate-100 text-slate-500'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
