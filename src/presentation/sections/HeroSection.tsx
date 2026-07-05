export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-linear-to-br from-blue-100 to-violet-100 opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-125 h-125 rounded-full bg-linear-to-br from-violet-100 to-blue-100 opacity-50 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-linear-to-r from-blue-50 to-violet-50 opacity-40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              El conocimiento es tu moneda de cambio
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Intercambia habilidades.{' '}
                <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Aprende sin gastar dinero.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-lg">
                Convierte tu conocimiento en oportunidades. Encuentra personas que te enseñen
                lo que necesitas mientras compartes aquello en lo que eres experto.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                Comenzar Gratis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#caracteristicas"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                Explorar Habilidades
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {(['bg-blue-400', 'bg-violet-400', 'bg-emerald-400', 'bg-amber-400'] as const).map((color, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                    {['A', 'C', 'M', 'L'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-slate-800">+2,400</span> personas ya intercambian habilidades
              </p>
            </div>
          </div>

          {/* Right — illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroIllustration() {
  const skills = [
    { label: 'Programación', color: 'from-blue-500 to-blue-600',    icon: '💻', top: '10%',  left:  '5%' },
    { label: 'Diseño Gráfico', color: 'from-violet-500 to-violet-600', icon: '🎨', top: '10%',  right: '5%' },
    { label: 'Marketing',    color: 'from-emerald-500 to-emerald-600', icon: '📈', bottom: '10%', left: '5%' },
    { label: 'Inglés',       color: 'from-amber-500 to-amber-600',   icon: '🌐', bottom: '10%', right: '5%' },
  ]

  return (
    <div className="relative w-115 h-115">
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200 animate-[spin_30s_linear_infinite]" />
      <div className="absolute inset-8 rounded-full border border-slate-100" />

      {/* Center card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 w-48 text-center space-y-3">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-linear-to-br from-blue-500 to-violet-600 flex items-center justify-center text-2xl shadow-lg shadow-blue-200">
            ⇄
          </div>
          <p className="font-bold text-slate-800 text-sm">Intercambio</p>
          <p className="text-xs text-slate-500">El conocimiento como moneda</p>
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(s => (
              <svg key={s} className="w-3 h-3 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Skill pills */}
      {skills.map((skill) => (
        <div key={skill.label} className="absolute" style={{ top: skill.top, bottom: (skill as { bottom?: string }).bottom, left: skill.left, right: (skill as { right?: string }).right }}>
          <div className={`bg-linear-to-r ${skill.color} text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg whitespace-nowrap`}>
            <span>{skill.icon}</span>
            {skill.label}
          </div>
        </div>
      ))}

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 460 460" fill="none" aria-hidden="true">
        <line x1="80" y1="60"  x2="230" y2="230" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="380" y1="60" x2="230" y2="230" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="80" y1="400" x2="230" y2="230" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="380" y1="400" x2="230" y2="230" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  )
}
