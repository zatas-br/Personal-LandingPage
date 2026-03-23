import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { AbsWorkout } from "@/components/AbsWorkout";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="antialiased min-h-screen bg-black text-white selection:bg-red-500/30">
        <Header />
        <main>
          <Hero />
          <About />
          <Features />
          <Testimonials />
          <AbsWorkout />
          <Pricing />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
