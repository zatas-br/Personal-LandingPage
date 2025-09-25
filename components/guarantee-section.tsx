"use client"

import { Shield, CheckCircle, RefreshCw, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GuaranteeSection() {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantia de 30 Dias",
      description: "Se não ficar satisfeito, devolvemos 100% do seu dinheiro",
    },
    {
      icon: CheckCircle,
      title: "Satisfação Garantida",
      description: "Mais de 98% dos nossos clientes recomendam nosso serviço",
    },
    {
      icon: RefreshCw,
      title: "Suporte Vitalício",
      description: "Acesso permanente a atualizações e melhorias",
    },
    {
      icon: Clock,
      title: "Resposta em 2h",
      description: "Suporte técnico especializado em até 2 horas",
    },
  ]

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossa Garantia para Você</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos tão confiantes na qualidade do nosso serviço que oferecemos garantias exclusivas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <guarantee.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{guarantee.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{guarantee.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-8 border shadow-sm max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Risco Zero para Você</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experimente nossa solução por 30 dias. Se não estiver completamente satisfeito, cancelamos sua assinatura
              e devolvemos 100% do valor pago, sem perguntas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Começar Teste Gratuito
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
