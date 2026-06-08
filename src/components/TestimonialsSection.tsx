const testimonials = [
  {
    name: 'Valentina Ríos',
    role: 'Diseñadora UX / UI',
    location: 'Lima, Perú',
    avatar: 'VR',
    avatarColor: 'from-pink-400 to-rose-500',
    rating: 5,
    text: 'Increíble plataforma. Llevo 3 meses enseñando diseño en Figma a cambio de clases de inglés y ya puedo tener conversaciones fluidas. El matching fue perfecto: la persona que me enseña inglés trabaja en una empresa internacional y su nivel de enseñanza es brutal.',
    skill: 'Diseño UX → Inglés',
    skillColor: 'bg-pink-50 text-pink-700 border-pink-100',
  },
  {
    name: 'Carlos Mendoza',
    role: 'Desarrollador Full Stack',
    location: 'Bogotá, Colombia',
    avatar: 'CM',
    avatarColor: 'from-blue-400 to-blue-600',
    rating: 5,
    text: 'Siempre quise aprender guitarra pero los profesores son carísimos. En SkillSwap encontré a un músico profesional que necesitaba aprender React. Llevamos 2 meses intercambiando y los dos hemos avanzado muchísimo. Es literalmente la mejor idea de app que he visto.',
    skill: 'Programación → Guitarra',
    skillColor: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  {
    name: 'Daniela Torres',
    role: 'Estudiante de Administración',
    location: 'Ciudad de México, MX',
    avatar: 'DT',
    avatarColor: 'from-violet-400 to-violet-600',
    rating: 5,
    text: 'Entré a SkillSwap sin mucha expectativa, pensando que era otro proyecto universitario más. Me equivoqué totalmente. En una semana encontré a alguien que enseña marketing digital y le estoy enseñando Excel avanzado. El sistema de reputación genera mucha confianza.',
    skill: 'Excel → Marketing Digital',
    skillColor: 'bg-violet-50 text-violet-700 border-violet-100',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-sm font-medium">
            Testimonios
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Lo que dicen nuestros{' '}
            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              usuarios.
            </span>
          </h2>
          <p className="text-lg text-slate-500">
            Miles de personas ya están aprendiendo y enseñando a través de SkillSwap.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-white rounded-2xl border border-slate-100 p-8 space-y-5 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-blue-100 fill-blue-100" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <p className="text-slate-600 text-sm leading-relaxed">{t.text}</p>

              {/* Skill badge */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${t.skillColor}`}>
                🔄 {t.skill}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
                <div className={`w-10 h-10 rounded-full bg-linear-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{t.name}</p>
                  <p className="text-xs text-slate-500 truncate">{t.role} · {t.location}</p>
                </div>
                <div className="ml-auto shrink-0">
                  <StarRating count={t.rating} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
