"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { User, Target, Award } from "lucide-react"

export function AboutSection() {
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Quem Sou Eu</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Conheça a pessoa por trás das soluções que transformam negócios
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Minha História</h3>
                  <p className="text-muted-foreground">
                    Com mais de 10 anos de experiência no mercado, dedico-me a criar soluções inovadoras que realmente
                    fazem a diferença na vida das pessoas e no crescimento dos negócios.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Minha Missão</h3>
                  <p className="text-muted-foreground">
                    Transformar ideias complexas em soluções simples e eficazes, sempre focando na experiência do
                    usuário e nos resultados do cliente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Meus Valores</h3>
                  <p className="text-muted-foreground">
                    Transparência, inovação e excelência são os pilares que guiam cada projeto. Acredito que o sucesso
                    vem da dedicação e do comprometimento com a qualidade.
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">João Silva</h3>
                  <p className="text-muted-foreground mb-4">Especialista em Soluções Digitais</p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Projetos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">10+</div>
                    <div className="text-sm text-muted-foreground">Anos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfação</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
