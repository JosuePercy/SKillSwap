export default function CTASection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-blue-700 to-violet-700 px-8 py-16 sm:px-16 sm:py-20 text-center shadow-2xl shadow-blue-300">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-violet-400/20 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-50 bg-white/5 rounded-full blur-3xl" />
          </div>

          {/* Floating skill pills */}
          <div className="absolute top-8 left-8 hidden sm:block">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-medium backdrop-blur-sm">💻 Programación</span>
          </div>
          <div className="absolute top-8 right-8 hidden sm:block">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-medium backdrop-blur-sm">🎨 Diseño</span>
          </div>
          <div className="absolute bottom-8 left-8 hidden sm:block">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-medium backdrop-blur-sm">🌐 Idiomas</span>
          </div>
          <div className="absolute bottom-8 right-8 hidden sm:block">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-medium backdrop-blur-sm">📈 Marketing</span>
          </div>

          {/* Content */}
          <div className="relative space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl backdrop-blur-sm">
              ⇄
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Tu próxima habilidad está a un intercambio de distancia.
              </h2>
              <p className="text-lg text-blue-100 max-w-xl mx-auto leading-relaxed">
                Únete a miles de personas que ya están aprendiendo y enseñando sin gastar dinero.
                Tu conocimiento tiene más valor del que crees.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-blue-700 bg-white hover:bg-blue-50 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                Únete a SkillSwap
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#como-funciona" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white/90 bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5">
                Ver cómo funciona
              </a>
            </div>
            <p className="text-blue-200 text-sm">Sin tarjeta de crédito · Sin compromisos · Gratis para siempre</p>
          </div>
        </div>
      </div>
    </section>
  )
}
