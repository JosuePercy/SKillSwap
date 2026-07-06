import AuthAccessSection from '../sections/AuthAccessSection'

interface AuthPageProps {
  mode: 'login' | 'register' | 'both'
}

export default function AuthPage({ mode }: AuthPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white text-slate-900 overflow-x-hidden">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              Skill<span className="text-blue-600">Swap</span>
            </span>
          </a>
          <div className="flex items-center gap-2 text-sm">
            <a
              href="/login"
              className={`px-3 py-2 rounded-lg ${mode === 'login' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              Login
            </a>
            <a
              href="/registro"
              className={`px-3 py-2 rounded-lg ${mode === 'register' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              Registro
            </a>
          </div>
        </div>
      </header>
      <main>
        <AuthAccessSection mode={mode} />
      </main>
    </div>
  )
}
