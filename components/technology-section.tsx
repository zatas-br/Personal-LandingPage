"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Zap, Shield, Rocket } from "lucide-react"

const technologies = [
  {
    icon: Cpu,
    title: "IA Avançada",
    description: "Algoritmos de machine learning que se adaptam e evoluem com seu negócio.",
    features: ["Análise preditiva", "Automação inteligente", "Insights em tempo real"],
  },
  {
    icon: Zap,
    title: "Performance Otimizada",
    description: "Tecnologia de ponta que garante velocidade e eficiência máximas.",
    features: ["Carregamento instantâneo", "Processamento paralelo", "Cache inteligente"],
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Proteção multicamadas para manter seus dados sempre seguros.",
    features: ["Criptografia avançada", "Monitoramento 24/7", "Backup automático"],
  },
  {
    icon: Rocket,
    title: "Escalabilidade",
    description: "Infraestrutura que cresce junto com seu negócio, sem limites.",
    features: ["Auto-scaling", "Load balancing", "Distribuição global"],
  },
]

export function TechnologySection() {
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
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Nossa Tecnologia</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Utilizamos as mais avançadas tecnologias para entregar soluções que superam expectativas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <tech.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
