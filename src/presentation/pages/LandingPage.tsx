import Navbar              from '../sections/Navbar'
import HeroSection         from '../sections/HeroSection'
import ProblemSection      from '../sections/ProblemSection'
import FeaturesSection     from '../sections/FeaturesSection'
import HowItWorksSection   from '../sections/HowItWorksSection'
import BenefitsSection     from '../sections/BenefitsSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import FAQSection          from '../sections/FAQSection'
import CTASection          from '../sections/CTASection'
import Footer              from '../sections/Footer'

/**
 * LandingPage — Adaptador primario (Presentation layer)
 * Orquesta las secciones de la landing sin conocer los detalles de
 * infraestructura ni de dominio. Cada sección obtiene sus datos
 * a través de hooks que invocan los casos de uso correspondientes.
 */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
