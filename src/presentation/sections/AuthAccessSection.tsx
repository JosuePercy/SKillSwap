import { useMemo, useState } from 'react'

type UserStatus = 'pending_verification' | 'active'

interface DemoUser {
  id: string
  email: string
  passwordHash: string
  status: UserStatus
}

type SkillMode = 'teach' | 'learn'

interface DemoProfile {
  userId: string
  name: string
  bio: string
  location: string
}

interface DemoSkill {
  userId: string
  skill: string
  level: 'basic' | 'intermediate' | 'advanced'
  mode: SkillMode
}

interface DemoRequest {
  id: string
  fromUserId: string
  toUserId: string
  status: 'pending' | 'accepted'
}

interface DemoMessage {
  fromUserId: string
  toUserId: string
  text: string
}

interface DemoSession {
  id: string
  userAId: string
  userBId: string
  date: string
}

interface DemoRating {
  exchangeId: string
  fromUserId: string
  toUserId: string
  score: number
}

interface DemoNotification {
  channel: 'email' | 'push' | 'in-app'
  event: string
  toUserId: string
  content: string
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

  const [profile, setProfile] = useState<DemoProfile | null>(null)
  const [profileName, setProfileName] = useState('')
  const [profileBio, setProfileBio] = useState('')
  const [profileLocation, setProfileLocation] = useState('')
  const [profileError, setProfileError] = useState('')
  const [profileMessage, setProfileMessage] = useState('')

  const [skills, setSkills] = useState<DemoSkill[]>([
    { userId: 'u-2', skill: 'Yoga', level: 'intermediate', mode: 'teach' },
    { userId: 'u-3', skill: 'Figma', level: 'advanced', mode: 'teach' },
    { userId: 'u-4', skill: 'Ingles', level: 'intermediate', mode: 'teach' },
  ])
  const [skillName, setSkillName] = useState('')
  const [skillLevel, setSkillLevel] = useState<'basic' | 'intermediate' | 'advanced'>('intermediate')
  const [skillMode, setSkillMode] = useState<SkillMode>('teach')
  const [skillError, setSkillError] = useState('')
  const [skillMessage, setSkillMessage] = useState('')

  const [searchSkill, setSearchSkill] = useState('Yoga')
  const [searchMode, setSearchMode] = useState<SkillMode>('teach')
  const [searchError, setSearchError] = useState('')

  const [requests, setRequests] = useState<DemoRequest[]>([])
  const [messages, setMessages] = useState<DemoMessage[]>([])
  const [chatInput, setChatInput] = useState('')
  const [sessions, setSessions] = useState<DemoSession[]>([])
  const [ratings, setRatings] = useState<DemoRating[]>([])
  const [notifications, setNotifications] = useState<DemoNotification[]>([])
  const [notificationChannel, setNotificationChannel] = useState<'email' | 'push' | 'in-app'>('in-app')

  const [loggedUserId, setLoggedUserId] = useState<string | null>(null)

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
    setLoggedUserId(user.id)
    setLoginEmail('')
    setLoginPassword('')
  }

  const addNotification = (
    event: string,
    toUserId: string,
    content: string,
    channel: 'email' | 'push' | 'in-app' = notificationChannel,
  ) => {
    setNotifications((prev) => [{ event, toUserId, content, channel }, ...prev].slice(0, 8))
  }

  const handleCreateProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setProfileError('')
    setProfileMessage('')

    if (!loggedUserId) {
      setProfileError('Primero debes iniciar sesion con un usuario activo.')
      return
    }
    if (!profileName.trim() || !profileBio.trim() || !profileLocation.trim()) {
      setProfileError('Campos obligatorios faltantes: nombre, bio o ubicacion.')
      return
    }

    setProfile({ userId: loggedUserId, name: profileName.trim(), bio: profileBio.trim(), location: profileLocation.trim() })
    setProfileMessage('Perfil creado correctamente y asociado al usuario.')
  }

  const handleAddSkill = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSkillError('')
    setSkillMessage('')

    if (!loggedUserId) {
      setSkillError('Debes iniciar sesion para agregar habilidad.')
      return
    }

    const normalized = skillName.trim()
    if (!normalized) {
      setSkillError('La habilidad es obligatoria.')
      return
    }

    const duplicate = skills.some(
      (s) => s.userId === loggedUserId && s.skill.toLowerCase() === normalized.toLowerCase() && s.mode === skillMode,
    )
    if (duplicate) {
      setSkillError('Habilidad duplicada para el mismo usuario y modo.')
      return
    }

    setSkills((prev) => [...prev, { userId: loggedUserId, skill: normalized, level: skillLevel, mode: skillMode }])
    setSkillMessage('Habilidad agregada correctamente al perfil.')
    setSkillName('')
  }

  const filteredUsers = useMemo(() => {
    setSearchError('')
    if (!searchSkill.trim()) {
      setSearchError('Filtro invalido: habilidad vacia.')
      return []
    }

    return [...new Set(
      skills
        .filter((s) => s.mode === searchMode && s.skill.toLowerCase() === searchSkill.trim().toLowerCase())
        .map((s) => s.userId),
    )]
  }, [skills, searchSkill, searchMode])

  const selectedTarget = filteredUsers.find((u) => u !== loggedUserId) ?? null

  const handleSendRequest = () => {
    if (!loggedUserId || !selectedTarget) return
    const request: DemoRequest = {
      id: `req-${Date.now()}`,
      fromUserId: loggedUserId,
      toUserId: selectedTarget,
      status: 'pending',
    }
    setRequests((prev) => [request, ...prev])
    addNotification('request_sent', selectedTarget, 'Recibiste una nueva solicitud de intercambio.')
  }

  const activeRequest = requests.find((r) => r.fromUserId === loggedUserId)
  const chatEnabled = activeRequest?.status === 'accepted'

  const handleAcceptRequest = () => {
    if (!activeRequest) return
    setRequests((prev) => prev.map((r) => r.id === activeRequest.id ? { ...r, status: 'accepted' } : r))
    addNotification('request_accepted', activeRequest.fromUserId, 'Tu solicitud fue aceptada.')
  }

  const handleSendChatMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!chatEnabled || !activeRequest || !chatInput.trim() || !loggedUserId) return

    setMessages((prev) => [
      ...prev,
      { fromUserId: loggedUserId, toUserId: activeRequest.toUserId, text: chatInput.trim() },
    ])
    addNotification('message', activeRequest.toUserId, 'Tienes un nuevo mensaje.')
    setChatInput('')
  }

  const handleCreateSession = () => {
    if (!chatEnabled || !activeRequest) return
    const session: DemoSession = {
      id: `ses-${Date.now()}`,
      userAId: activeRequest.fromUserId,
      userBId: activeRequest.toUserId,
      date: new Date().toISOString().slice(0, 16),
    }
    setSessions((prev) => [session, ...prev])
    addNotification('session_created', activeRequest.toUserId, 'Se agendo una sesion en calendario.')
  }

  const handleRate = (score: number) => {
    if (!activeRequest || !loggedUserId) return

    const exchangeId = activeRequest.id
    const alreadyRated = ratings.some((r) => r.exchangeId === exchangeId && r.fromUserId === loggedUserId)
    if (alreadyRated) return

    setRatings((prev) => [...prev, {
      exchangeId,
      fromUserId: loggedUserId,
      toUserId: activeRequest.toUserId,
      score,
    }])
  }

  const targetRatings = ratings.filter((r) => r.toUserId === selectedTarget)
  const reputation = targetRatings.length
    ? (targetRatings.reduce((acc, item) => acc + item.score, 0) / targetRatings.length).toFixed(2)
    : '0.00'

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

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-slate-900">Flujo funcional PU/PI en pagina</h3>
            <div className="text-xs px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-600">
              Usuario logueado: {loggedUserId ?? 'ninguno'}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <article className="rounded-xl border border-slate-200 p-4 space-y-3">
              <h4 className="font-semibold text-slate-900">PU-03 | Creacion de perfil</h4>
              <form className="space-y-2" onSubmit={handleCreateProfile}>
                <input value={profileName} onChange={(e) => setProfileName(e.target.value)} placeholder="Nombre" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
                <input value={profileBio} onChange={(e) => setProfileBio(e.target.value)} placeholder="Bio" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
                <input value={profileLocation} onChange={(e) => setProfileLocation(e.target.value)} placeholder="Ubicacion" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
                <button type="submit" className="w-full rounded-lg bg-slate-900 text-white text-sm font-semibold py-2">Guardar perfil</button>
              </form>
              {profileError && <p className="text-xs text-red-600">{profileError}</p>}
              {profileMessage && <p className="text-xs text-emerald-700">{profileMessage}</p>}
              {profile && <p className="text-xs text-slate-500">Perfil: {profile.name} - {profile.location}</p>}
            </article>

            <article className="rounded-xl border border-slate-200 p-4 space-y-3">
              <h4 className="font-semibold text-slate-900">PU-04 | Agregar habilidad</h4>
              <form className="space-y-2" onSubmit={handleAddSkill}>
                <input value={skillName} onChange={(e) => setSkillName(e.target.value)} placeholder="Habilidad (ej: Ingles)" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
                <div className="grid grid-cols-2 gap-2">
                  <select value={skillLevel} onChange={(e) => setSkillLevel(e.target.value as 'basic' | 'intermediate' | 'advanced')} className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
                    <option value="basic">basic</option>
                    <option value="intermediate">intermediate</option>
                    <option value="advanced">advanced</option>
                  </select>
                  <select value={skillMode} onChange={(e) => setSkillMode(e.target.value as SkillMode)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
                    <option value="teach">teach</option>
                    <option value="learn">learn</option>
                  </select>
                </div>
                <button type="submit" className="w-full rounded-lg bg-blue-600 text-white text-sm font-semibold py-2">Agregar habilidad</button>
              </form>
              {skillError && <p className="text-xs text-red-600">{skillError}</p>}
              {skillMessage && <p className="text-xs text-emerald-700">{skillMessage}</p>}
            </article>

            <article className="rounded-xl border border-slate-200 p-4 space-y-3">
              <h4 className="font-semibold text-slate-900">PU-05 | Buscar usuarios</h4>
              <div className="grid grid-cols-2 gap-2">
                <input value={searchSkill} onChange={(e) => setSearchSkill(e.target.value)} placeholder="Habilidad" className="rounded-lg border border-slate-200 px-3 py-2 text-sm" />
                <select value={searchMode} onChange={(e) => setSearchMode(e.target.value as SkillMode)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
                  <option value="teach">teach</option>
                  <option value="learn">learn</option>
                </select>
              </div>
              {searchError && <p className="text-xs text-red-600">{searchError}</p>}
              <p className="text-xs text-slate-600">Resultados: {filteredUsers.length === 0 ? 'sin resultados' : filteredUsers.join(', ')}</p>
            </article>

            <article className="rounded-xl border border-slate-200 p-4 space-y-3">
              <h4 className="font-semibold text-slate-900">PI-03/04/05/06/07 | Flujo intercambio</h4>
              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={handleSendRequest} disabled={!loggedUserId || !selectedTarget} className="rounded-lg bg-indigo-600 disabled:bg-slate-300 text-white text-xs font-semibold px-3 py-2">Enviar solicitud</button>
                <button type="button" onClick={handleAcceptRequest} disabled={!activeRequest || activeRequest.status === 'accepted'} className="rounded-lg bg-emerald-600 disabled:bg-slate-300 text-white text-xs font-semibold px-3 py-2">Aceptar solicitud</button>
                <button type="button" onClick={handleCreateSession} disabled={!chatEnabled} className="rounded-lg bg-amber-600 disabled:bg-slate-300 text-white text-xs font-semibold px-3 py-2">Crear sesion</button>
                <button type="button" onClick={() => handleRate(5)} disabled={!chatEnabled} className="rounded-lg bg-pink-600 disabled:bg-slate-300 text-white text-xs font-semibold px-3 py-2">Calificar 5</button>
              </div>

              <form className="flex gap-2" onSubmit={handleSendChatMessage}>
                <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Mensaje de chat" className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm" />
                <button type="submit" disabled={!chatEnabled} className="rounded-lg bg-slate-900 disabled:bg-slate-300 text-white text-xs font-semibold px-3 py-2">Enviar</button>
              </form>

              <div className="text-xs text-slate-600 space-y-1">
                <p>Solicitud: {activeRequest ? activeRequest.status : 'no creada'}</p>
                <p>Chat habilitado: {chatEnabled ? 'si' : 'no'}</p>
                <p>Mensajes guardados: {messages.length}</p>
                <p>Sesiones en agenda: {sessions.length}</p>
                <p>Reputacion objetivo (promedio): {reputation}</p>
              </div>

              <div className="pt-2 border-t border-slate-200 space-y-2">
                <div className="flex items-center gap-2">
                  <label className="text-xs text-slate-500">Canal notificacion:</label>
                  <select value={notificationChannel} onChange={(e) => setNotificationChannel(e.target.value as 'email' | 'push' | 'in-app')} className="rounded-lg border border-slate-200 px-2 py-1 text-xs">
                    <option value="in-app">in-app</option>
                    <option value="email">email</option>
                    <option value="push">push</option>
                  </select>
                </div>
                <p className="text-xs text-slate-500">Ultimas notificaciones:</p>
                <ul className="space-y-1 max-h-24 overflow-auto">
                  {notifications.map((n, idx) => (
                    <li key={`${n.event}-${idx}`} className="text-xs text-slate-600">
                      [{n.channel}] {n.event} {'->'} {n.toUserId}: {n.content}
                    </li>
                  ))}
                  {notifications.length === 0 && <li className="text-xs text-slate-400">Sin notificaciones</li>}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
