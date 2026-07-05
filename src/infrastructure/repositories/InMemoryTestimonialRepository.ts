import type { Testimonial } from '../../domain/entities/Testimonial'
import type { ITestimonialRepository } from '../../application/ports/out/ITestimonialRepository'

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
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
    id: 'testimonial-2',
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
    id: 'testimonial-3',
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

export class InMemoryTestimonialRepository implements ITestimonialRepository {
  getAll(): Promise<Testimonial[]> {
    return Promise.resolve(TESTIMONIALS)
  }
}
