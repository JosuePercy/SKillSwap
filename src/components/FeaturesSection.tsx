const features = [
  {
    icon: '🎯',
    title: 'Matching Inteligente',
    description:
      'Nuestro algoritmo analiza tus habilidades e intereses para conectarte automáticamente con personas que tienen exactamente lo que necesitas.',
    gradient: 'from-blue-500 to-blue-600',
    light: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: '💬',
    title: 'Chat Integrado',
    description:
      'Comunícate directamente con otros usuarios para acordar horarios, modalidades y los detalles del intercambio, todo dentro de la plataforma.',
    gradient: 'from-violet-500 to-violet-600',
    light: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: '⭐',
    title: 'Sistema de Reputación',
    description:
      'Calificaciones, reseñas y badges verificados construyen la confianza de cada usuario. Sabe exactamente con quién estás aprendiendo.',
    gradient: 'from-amber-500 to-amber-600',
    light: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: '📅',
    title: 'Agenda de Sesiones',
    description:
      'Programa sesiones presenciales o virtuales directamente desde la app. Gestiona tu calendario de intercambios de forma sencilla.',
    gradient: 'from-emerald-500 to-emerald-600',
    light: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: '📹',
    title: 'Videollamadas',
    description:
      'Realiza intercambios desde cualquier lugar del mundo con videollamadas integradas. Sin necesidad de usar herramientas externas.',
    gradient: 'from-rose-500 to-rose-600',
    light: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    icon: '🏆',
    title: 'Sistema de Puntos',
    description:
      'Gana puntos por cada intercambio completado. Úsalos para acceder a sesiones adicionales y desbloquear funciones premium de la plataforma.',
    gradient: 'from-indigo-500 to-indigo-600',
    light: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
]

export default function FeaturesSection() {
  return (
    <section id="caracteristicas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
            Características
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Todo lo que necesitas para{' '}
            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              intercambiar y aprender.
            </span>
          </h2>
          <p className="text-lg text-slate-500">
            Una plataforma completa diseñada para que el intercambio de habilidades sea fácil, confiable y efectivo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <article
              key={f.title}
              className={`group relative rounded-2xl bg-white border ${f.border} p-8 space-y-4 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-2xl ${f.light} opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />

              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${f.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {f.icon}
                </div>
              </div>
              <div className="relative space-y-2">
                <h3 className="text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
