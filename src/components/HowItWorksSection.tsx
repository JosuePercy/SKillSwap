const steps = [
  {
    number: '01',
    icon: '👤',
    title: 'Crea tu perfil',
    description: 'Regístrate en segundos. Añade tu foto, experiencia y una breve descripción sobre ti.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    number: '02',
    icon: '🎓',
    title: 'Agrega tus habilidades',
    description: 'Publica las habilidades que dominas: programación, diseño, idiomas, música, cocina y más.',
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50',
  },
  {
    number: '03',
    icon: '🎯',
    title: 'Indica qué deseas aprender',
    description: 'Selecciona las habilidades que quieres adquirir. Esto activa nuestro motor de matching.',
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    number: '04',
    icon: '🤝',
    title: 'Encuentra personas compatibles',
    description: 'El algoritmo encuentra perfiles que tienen lo que tú buscas y buscan lo que tú ofreces.',
    color: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50',
  },
  {
    number: '05',
    icon: '🔄',
    title: 'Realiza el intercambio',
    description: 'Coordina horarios por chat, agenda tu sesión y realiza el intercambio presencial o virtual.',
    color: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50',
  },
  {
    number: '06',
    icon: '⭐',
    title: 'Califica la experiencia',
    description: 'Al finalizar, ambas partes se califican mutuamente. Construyes reputación con cada sesión.',
    color: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-sm font-medium">
            Cómo Funciona
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            De cero a aprender en{' '}
            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              6 simples pasos.
            </span>
          </h2>
          <p className="text-lg text-slate-500">
            El proceso es tan sencillo que puedes completar tu primer intercambio el mismo día que te registras.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group bg-white rounded-2xl border border-slate-100 p-8 space-y-5 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${step.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <span className="text-6xl font-black text-slate-50 select-none leading-none">
                  {step.number}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector arrow (hidden on last in each row) */}
              {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-linear-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 hover:-translate-y-0.5"
          >
            Empieza ahora — es gratis
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
