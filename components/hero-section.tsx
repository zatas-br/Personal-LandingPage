"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useSettings } from "@/hooks/use-settings"

interface HeroSectionProps {
  layout?: string
}

export function HeroSection({ layout: propLayout }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { settings } = useSettings()
  // Use prop layout if provided, otherwise fallback to settings
  const layout = propLayout || settings?.sections?.find((s) => s.id === "hero")?.layout || "layout1"

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (layout === "layout2") {
    // Layout 2: Split screen (Left Text, Right Visual)
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div
              className={`text-left transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            >
              <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="h-4 w-4" />
                Transforme seu negócio hoje mesmo
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
                Soluções que{" "}
                <span className="text-primary relative inline-block">
                  Impulsionam
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full" />
                </span>{" "}
                Resultados
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-lg text-pretty">
                Descubra como nossa tecnologia inovadora pode revolucionar sua empresa e levar seus resultados para o
                próximo nível.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Button size="lg" className="text-lg px-8 py-6 group">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  Ver Demonstração
                </Button>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div
              className={`relative hidden lg:block transition-all duration-1000 delay-300 ${
                isVisible ? "animate-fade-in-left" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                {/* Abstract decorative elements acting as a placeholder for an image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl rotate-3 transform transition-transform hover:rotate-6 duration-500" />
                <div className="absolute inset-0 bg-background border border-border rounded-3xl -rotate-3 transform transition-transform hover:-rotate-1 duration-500 flex items-center justify-center overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-900/[0.04] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
                  <div className="text-9xl font-bold text-primary/10 select-none">Hero</div>
                </div>
              </div>
              {/* Floating blobs behind */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
              <div
                className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Layout 1: Centered (Default)
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Elementos decorativos animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4" />
            Transforme seu negócio hoje mesmo
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Soluções que{" "}
            <span className="text-primary relative">
              Impulsionam
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full" />
            </span>{" "}
            Resultados
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Descubra como nossa tecnologia inovadora pode revolucionar sua empresa e levar seus resultados para o
            próximo nível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 group">
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Ver Demonstração
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
