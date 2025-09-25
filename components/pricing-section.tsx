"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

const plans = [
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

export function PricingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Escolha Seu Plano</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Soluções flexíveis que se adaptam ao tamanho e necessidades do seu negócio
            </p>
          </div>

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
        </div>
      </div>
    </section>
  )
}
