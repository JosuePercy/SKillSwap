import { useMemo, useState } from 'react'

type UserStatus = 'pending_verification' | 'active'

interface DemoUser {
  id: string
  email: string
  passwordHash: string
  status: UserStatus
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function hashPassword(password: string): string {
  return `hash_${password}`
}

interface AuthAccessSectionProps {
  mode?: 'login' | 'register' | 'both'
}

export default function AuthAccessSection({ mode = 'both' }: AuthAccessSectionProps) {
  const [users, setUsers] = useState<DemoUser[]>([
    {
      id: 'u-1',
      email: 'activo@skillswap.com',
      passwordHash: hashPassword('pass1234'),
      status: 'active',
    },
    {
      id: 'u-2',
      email: 'pendiente@skillswap.com',
      passwordHash: hashPassword('pass1234'),
      status: 'pending_verification',
    },
  ])

  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerMessage, setRegisterMessage] = useState('')
  const [registerError, setRegisterError] = useState('')

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginMessage, setLoginMessage] = useState('')
  const [loginError, setLoginError] = useState('')

  const demoHint = useMemo(
    () => [
      'Login activo: activo@skillswap.com / pass1234',
      'Login pendiente: pendiente@skillswap.com / pass1234',
    ],
    [],
  )

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setRegisterError('')
    setRegisterMessage('')

    const email = registerEmail.trim().toLowerCase()
    const password = registerPassword.trim()

    if (!isValidEmail(email)) {
      setRegisterError('Email invalido')
      return
    }

    if (password.length < 8) {
      setRegisterError('Contrasena debil (minimo 8 caracteres)')
      return
    }

    const duplicate = users.some((u) => u.email === email)
    if (duplicate) {
      setRegisterError('Email duplicado: ya existe una cuenta')
      return
    }

    const newUser: DemoUser = {
      id: `u-${Date.now()}`,
      email,
      passwordHash: hashPassword(password),
      status: 'pending_verification',
    }

    setUsers((prev) => [...prev, newUser])
    setRegisterMessage('Registro exitoso. Estado: pendiente de verificacion')
    setRegisterEmail('')
    setRegisterPassword('')
  }

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoginError('')
    setLoginMessage('')

    const email = loginEmail.trim().toLowerCase()
    const password = loginPassword.trim()
    const user = users.find((u) => u.email === email)

    if (!user) {
      setLoginError('Usuario no encontrado')
      return
    }

    if (user.status !== 'active') {
      setLoginError('Usuario no verificado: acceso denegado')
      return
    }

    if (user.passwordHash !== hashPassword(password)) {
      setLoginError('Contrasena incorrecta')
      return
    }

    setLoginMessage(`Login correcto. Token JWT: jwt_${user.id}`)
    setLoginEmail('')
    setLoginPassword('')
  }

  const showRegister = mode === 'register' || mode === 'both'
  const showLogin = mode === 'login' || mode === 'both'

  return (
    <section id="acceso" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
            {mode === 'login' ? 'Login' : mode === 'register' ? 'Registro' : 'Acceso'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {mode === 'login' ? (
              <>Inicia <span className="text-blue-600">sesion</span></>
            ) : mode === 'register' ? (
              <>Crea tu <span className="text-blue-600">cuenta</span></>
            ) : (
              <>Demo de <span className="text-blue-600">registro y login</span></>
            )}
          </h2>
          <p className="text-slate-500">
            {mode === 'both'
              ? 'Valida visualmente los casos PU-01 y PU-02 en un flujo controlado.'
              : 'Flujo de autenticacion separado, como en una aplicacion real.'}
          </p>
        </div>

        <div className={`grid gap-6 ${showRegister && showLogin ? 'md:grid-cols-2' : 'max-w-xl mx-auto'}`}>
          {showRegister && (
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Registro de usuario</h3>
            <form className="space-y-3" onSubmit={handleRegister}>
              <input
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <input
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                placeholder="Contrasena (minimo 8 caracteres)"
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 transition-colors"
              >
                Registrarse
              </button>
            </form>
            {registerError && <p className="mt-3 text-sm text-red-600">{registerError}</p>}
            {registerMessage && <p className="mt-3 text-sm text-emerald-700">{registerMessage}</p>}
          </article>
          )}

          {showLogin && (
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Inicio de sesion</h3>
            <form className="space-y-3" onSubmit={handleLogin}>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Contrasena"
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-4 py-2.5 transition-colors"
              >
                Iniciar sesion
              </button>
            </form>
            {loginError && <p className="mt-3 text-sm text-red-600">{loginError}</p>}
            {loginMessage && <p className="mt-3 text-sm text-emerald-700">{loginMessage}</p>}
          </article>
          )}
        </div>

        <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <p className="font-semibold mb-1">Credenciales de prueba</p>
          <ul className="list-disc pl-5 space-y-1">
            {demoHint.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
