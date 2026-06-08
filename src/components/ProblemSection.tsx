const problems = [
  {
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

export default function ProblemSection() {
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
              key={p.title}
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
