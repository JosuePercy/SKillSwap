import { useBenefits } from '../hooks/useBenefits'

export default function BenefitsSection() {
  const { groups, stats } = useBenefits()

  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Benefit cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((group) => (
            <div
              key={group.id}
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
                    <svg className={`w-5 h-5 mt-0.5 shrink-0 ${group.check}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-600 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats row */}
        {stats.length > 0 && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-8 rounded-2xl bg-linear-to-r from-blue-600 to-violet-600 shadow-xl shadow-blue-200">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center space-y-1">
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="text-sm text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
