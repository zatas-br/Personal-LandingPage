"use client"

import { useSettings } from "@/hooks/use-settings"
import { NotificationBar } from "@/components/notification-bar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechnologySection } from "@/components/technology-section"
import { AppShowcaseSection } from "@/components/app-showcase-section"
import { PartnersSection } from "@/components/partners-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"
import { ResultsSection } from "@/components/results-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FaqSection } from "@/components/faq-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AdminControls } from "@/components/admin-controls"
import { FloatingWhatsapp } from "@/components/floating-whatsapp"

export default function HomePage() {
  const { settings } = useSettings()

  // Função auxiliar para verificar se a seção está habilitada
  const isSectionEnabled = (id: string) => {
    const section = settings.sections.find((s) => s.id === id)
    return section ? section.enabled : true // Renderiza por padrão se não for encontrado
  }

  return (
    <main className="min-h-screen">
      <NotificationBar />

      {isSectionEnabled("hero") && <HeroSection />}
      {isSectionEnabled("about") && <AboutSection />}
      {isSectionEnabled("technology") && <TechnologySection />}
      {isSectionEnabled("app") && <AppShowcaseSection />}
      {isSectionEnabled("partners") && <PartnersSection />}
      {isSectionEnabled("how-it-works") && <HowItWorksSection />}
      {isSectionEnabled("features") && <FeaturesSection />}
      {isSectionEnabled("results") && <ResultsSection />}
      {isSectionEnabled("testimonials") && <TestimonialsSection />}
      {isSectionEnabled("pricing") && <PricingSection />}
      {isSectionEnabled("guarantee") && <GuaranteeSection />}
      {isSectionEnabled("faq") && <FaqSection />}
      {isSectionEnabled("newsletter") && <NewsletterSection />}
      {isSectionEnabled("contact") && <ContactSection />}

      <Footer />
      <AdminControls />
      <FloatingWhatsapp />
    </main>
  )
}