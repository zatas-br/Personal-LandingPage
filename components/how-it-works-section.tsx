"use client"

import { CheckCircle, ArrowRight } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Cadastre-se",
      description: "Crie sua conta em menos de 2 minutos com nosso processo simplificado",
      icon: "👤",
    },
    {
      number: "02",
      title: "Configure",
      description: "Personalize sua experiência com nossas ferramentas intuitivas",
      icon: "⚙️",
    },
    {
      number: "03",
      title: "Implemente",
      description: "Integre nossa solução ao seu negócio com suporte completo",
      icon: "🚀",
    },
    {
      number: "04",
      title: "Monitore",
      description: "Acompanhe resultados em tempo real com nosso dashboard avançado",
      icon: "📊",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e eficiente para você começar a ver resultados rapidamente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {step.icon}
                </div>
                <div className="text-sm font-medium text-primary mb-2">PASSO {step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 text-primary/30">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Setup completo em menos de 10 minutos</span>
          </div>
        </div>
      </div>
    </section>
  )
}
