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
import { SettingsPanel } from "@/components/settings-panel"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NotificationBar />

      <div id="section-hero">
        <HeroSection />
      </div>
      <div id="section-about">
        <AboutSection />
      </div>
      <div id="section-technology">
        <TechnologySection />
      </div>
      <div id="section-app">
        <AppShowcaseSection />
      </div>

      <div id="section-partners">
        <PartnersSection />
      </div>
      <div id="section-how-it-works">
        <HowItWorksSection />
      </div>
      <div id="section-features">
        <FeaturesSection />
      </div>

      <div id="section-results">
        <ResultsSection />
      </div>
      <div id="section-testimonials">
        <TestimonialsSection />
      </div>
      <div id="section-pricing">
        <PricingSection />
      </div>

      <div id="section-guarantee">
        <GuaranteeSection />
      </div>
      <div id="section-faq">
        <FaqSection />
      </div>
      <div id="section-newsletter">
        <NewsletterSection />
      </div>

      <div id="section-contact">
        <ContactSection />
      </div>

      <Footer />
      <SettingsPanel />
    </main>
  )
}
