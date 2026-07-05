import { useFeatures } from '../hooks/useFeatures'

export default function FeaturesSection() {
  const { features, query, setQuery } = useFeatures()

  return (
    <section id="caracteristicas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
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

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 pointer-events-none">
              🔍
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar característica..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm transition"
            />
          </div>
          {query && (
            <p className="mt-2 text-xs text-slate-400 text-center">
              {features.length === 0
                ? 'Sin resultados para "' + query + '"'
                : `${features.length} resultado${features.length !== 1 ? 's' : ''}`}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <article
              key={f.id}
              className={`group relative rounded-2xl bg-white border ${f.border} p-8 space-y-4 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}
            >
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
