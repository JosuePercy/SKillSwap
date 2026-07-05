/**
 * DI Container — Punto central de composición de la arquitectura hexagonal.
 *
 * Aquí se conectan los adaptadores secundarios (Infrastructure)
 * con los casos de uso (Application), siguiendo el principio de
 * inversión de dependencias: el dominio no conoce la infraestructura.
 *
 * Para reemplazar la fuente de datos (ej. pasar de in-memory a una API REST)
 * basta con intercambiar el repositorio en este único lugar.
 */

// ── Infrastructure (adaptadores secundarios) ───────────────────────────────
import { InMemoryFeatureRepository }      from '../../infrastructure/repositories/InMemoryFeatureRepository'
import { InMemoryTestimonialRepository }  from '../../infrastructure/repositories/InMemoryTestimonialRepository'
import { InMemoryFAQRepository }          from '../../infrastructure/repositories/InMemoryFAQRepository'
import { InMemoryHowItWorksRepository }   from '../../infrastructure/repositories/InMemoryHowItWorksRepository'
import { InMemoryBenefitRepository }      from '../../infrastructure/repositories/InMemoryBenefitRepository'
import { InMemoryProblemRepository }      from '../../infrastructure/repositories/InMemoryProblemRepository'
import { InMemoryPlatformStatRepository } from '../../infrastructure/repositories/InMemoryPlatformStatRepository'

// ── Application (casos de uso) ─────────────────────────────────────────────
import { GetFeaturesUseCase }      from '../../application/use-cases/GetFeaturesUseCase'
import { GetTestimonialsUseCase }  from '../../application/use-cases/GetTestimonialsUseCase'
import { GetFAQsUseCase }          from '../../application/use-cases/GetFAQsUseCase'
import { GetHowItWorksUseCase }    from '../../application/use-cases/GetHowItWorksUseCase'
import { GetBenefitsUseCase }      from '../../application/use-cases/GetBenefitsUseCase'
import { GetProblemsUseCase }      from '../../application/use-cases/GetProblemsUseCase'
import { GetPlatformStatsUseCase } from '../../application/use-cases/GetPlatformStatsUseCase'

// ── Container ──────────────────────────────────────────────────────────────
export const container = {
  getFeaturesUseCase:      new GetFeaturesUseCase(new InMemoryFeatureRepository()),
  getTestimonialsUseCase:  new GetTestimonialsUseCase(new InMemoryTestimonialRepository()),
  getFAQsUseCase:          new GetFAQsUseCase(new InMemoryFAQRepository()),
  getHowItWorksUseCase:    new GetHowItWorksUseCase(new InMemoryHowItWorksRepository()),
  getBenefitsUseCase:      new GetBenefitsUseCase(new InMemoryBenefitRepository()),
  getProblemsUseCase:      new GetProblemsUseCase(new InMemoryProblemRepository()),
  getPlatformStatsUseCase: new GetPlatformStatsUseCase(new InMemoryPlatformStatRepository()),
} as const
