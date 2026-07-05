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

// ── Infrastructure (adaptadores secundarios — API REST) ────────────────────
import { ApiFeatureRepository }      from '../../infrastructure/repositories/ApiFeatureRepository'
import { ApiTestimonialRepository }  from '../../infrastructure/repositories/ApiTestimonialRepository'
import { ApiFAQRepository }          from '../../infrastructure/repositories/ApiFAQRepository'
import { ApiBenefitRepository }      from '../../infrastructure/repositories/ApiBenefitRepository'
import { ApiPlatformStatRepository } from '../../infrastructure/repositories/ApiPlatformStatRepository'
import { InMemoryHowItWorksRepository }   from '../../infrastructure/repositories/InMemoryHowItWorksRepository'
import { InMemoryProblemRepository }      from '../../infrastructure/repositories/InMemoryProblemRepository'

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
  getFeaturesUseCase:      new GetFeaturesUseCase(new ApiFeatureRepository()),
  getTestimonialsUseCase:  new GetTestimonialsUseCase(new ApiTestimonialRepository()),
  getFAQsUseCase:          new GetFAQsUseCase(new ApiFAQRepository()),
  getHowItWorksUseCase:    new GetHowItWorksUseCase(new InMemoryHowItWorksRepository()),
  getBenefitsUseCase:      new GetBenefitsUseCase(new ApiBenefitRepository()),
  getProblemsUseCase:      new GetProblemsUseCase(new InMemoryProblemRepository()),
  getPlatformStatsUseCase: new GetPlatformStatsUseCase(new ApiPlatformStatRepository()),
} as const
