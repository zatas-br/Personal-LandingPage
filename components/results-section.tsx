"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react"

const results = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Aumento em Vendas",
    description: "Crescimento médio dos nossos clientes",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Usuários Ativos",
    description: "Pessoas impactadas positivamente",
  },
  {
    icon: DollarSign,
    value: "R$ 2M+",
    label: "Receita Gerada",
    description: "Para nossos parceiros de negócio",
  },
  {
    icon: Clock,
    value: "80%",
    label: "Tempo Economizado",
    description: "Em processos automatizados",
  },
]

export function ResultsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState(results.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animar contadores
          results.forEach((result, index) => {
            const target = Number.parseInt(result.value.replace(/[^\d]/g, ""))
            let current = 0
            const increment = target / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                current = target
                clearInterval(timer)
              }
              setCounters((prev) => {
                const newCounters = [...prev]
                newCounters[index] = Math.floor(current)
                return newCounters
              })
            }, 30)
          })
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Seus Resultados</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Números que comprovam o impacto real das nossas soluções
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <result.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {result.value.includes("%")
                      ? `${counters[index]}%`
                      : result.value.includes("K")
                        ? `${Math.floor(counters[index] / 1000)}K+`
                        : result.value.includes("M")
                          ? `R$ ${Math.floor(counters[index] / 1000000)}M+`
                          : counters[index]}
                  </div>
                  <div className="font-semibold mb-2">{result.label}</div>
                  <div className="text-sm text-muted-foreground">{result.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
