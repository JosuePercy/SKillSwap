import { useProblems } from '../hooks/useProblems'

export default function ProblemSection() {
  const { problems } = useProblems()

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-medium">
            El problema actual
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Aprender nuevas habilidades{' '}
            <span className="relative">
              <span className="relative z-10">no debería ser costoso.</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-red-100/70 z-0 rounded" />
            </span>
          </h2>
          <p className="text-lg text-slate-500">
            Estas son las barreras que enfrentan miles de personas todos los días al intentar aprender.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <article
              key={p.id}
              className={`relative rounded-2xl bg-linear-to-br ${p.color} border ${p.border} p-8 space-y-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 ${p.iconBg} rounded-xl flex items-center justify-center text-2xl`}>
                {p.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.description}</p>
              </div>
              <div className={`inline-flex items-baseline gap-1.5 ${p.statColor} font-bold`}>
                <span className="text-3xl">{p.stat}</span>
                <span className="text-sm font-medium text-slate-500">{p.statLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
