import LandingPage from './presentation/pages/LandingPage'
import AuthPage from './presentation/pages/AuthPage'

/**
 * App — Punto de entrada de la aplicación React.
 * Delega completamente en LandingPage (capa de presentación).
 */
export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'

  if (pathname === '/login') {
    return <AuthPage mode="login" />
  }

  if (pathname === '/registro') {
    return <AuthPage mode="register" />
  }

  if (pathname === '/acceso') {
    return <AuthPage mode="both" />
  }

  return <LandingPage />
}
