const benefitGroups = [
  {
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

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium">
            Beneficios
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Diseñado para{' '}
            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              todos en la comunidad.
            </span>
          </h2>
          <p className="text-lg text-slate-500">
            SkillSwap crea valor para cada perfil de usuario. Descubre qué ganas tú.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefitGroups.map((group) => (
            <div
              key={group.audience}
              className={`rounded-2xl bg-linear-to-br ${group.bg} border ${group.border} p-8 space-y-6 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${group.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{group.audience}</h3>
              </div>

              <ul className="space-y-3">
                {group.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 shrink-0 ${group.check}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-slate-600 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-8 rounded-2xl bg-linear-to-r from-blue-600 to-violet-600 shadow-xl shadow-blue-200">
          {[
            { value: '2,400+', label: 'Usuarios activos' },
            { value: '8,900+', label: 'Intercambios completados' },
            { value: '150+', label: 'Habilidades disponibles' },
            { value: '4.9/5', label: 'Calificación promedio' },
          ].map((stat) => (
            <div key={stat.label} className="text-center space-y-1">
              <p className="text-3xl font-extrabold text-white">{stat.value}</p>
              <p className="text-sm text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
