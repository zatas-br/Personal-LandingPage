"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"
import { useSettings } from "@/hooks/use-settings"

interface PlanItem {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular: boolean
}

interface PricingSectionProps {
  layout?: string
  title?: string
  subtitle?: string
  plans?: PlanItem[]
}

export function PricingSection({
  layout: propLayout,
  title = "Escolha Seu Plano",
  subtitle = "Soluções flexíveis que se adaptam ao tamanho e necessidades do seu negócio",
  plans: propPlans
}: PricingSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { settings } = useSettings()
  const layout = propLayout || settings?.sections?.find((s) => s.id === "pricing")?.layout || "layout1"

  const defaultPlans: PlanItem[] = [
    {
      name: "Starter",
      price: "R$ 297",
      period: "/mês",
      description: "Perfeito para começar sua transformação digital",
      features: [
        "Consultoria inicial gratuita",
        "Implementação básica",
        "Suporte por email",
        "Relatórios mensais",
        "Integração com 3 ferramentas",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "R$ 597",
      period: "/mês",
      description: "Para empresas que querem resultados acelerados",
      features: [
        "Tudo do plano Starter",
        "Consultoria estratégica",
        "Implementação avançada",
        "Suporte prioritário 24/7",
        "Relatórios semanais",
        "Integração ilimitada",
        "Treinamento da equipe",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      description: "Solução completa para grandes empresas",
      features: [
        "Tudo do plano Professional",
        "Desenvolvimento customizado",
        "Gerente de conta dedicado",
        "SLA garantido",
        "Infraestrutura dedicada",
        "Integração personalizada",
        "Consultoria contínua",
      ],
      popular: false,
    },
  ]

  const plans = propPlans || defaultPlans

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {subtitle}
            </p>
          </div>

          {layout === "layout2" ? (
            // Layout 2: Horizontal Stack / Minimalist
            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-background rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 border ${
                    plan.popular ? "border-primary shadow-lg" : "border-border shadow-sm"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 md:hidden">
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Popular
                      </div>
                    </div>
                  )}

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      {plan.popular && (
                        <span className="hidden md:inline-flex bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-medium">
                          Mais Popular
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start">
                      {plan.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {plan.features.length > 4 && (
                        <span className="text-sm text-primary font-medium">+ e mais</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4 min-w-[200px]">
                    <div className="text-center">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground text-sm">{plan.period}</span>
                    </div>
                    <Button
                      className={`w-full ${plan.popular ? "" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.name === "Enterprise" ? "Falar com Vendas" : "Começar Agora"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Layout 1: Cards (Default)
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    plan.popular ? "ring-2 ring-primary shadow-lg scale-105" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        Mais Popular
                      </div>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {plan.name === "Enterprise" ? "Falar com Vendas" : "Começar Agora"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
