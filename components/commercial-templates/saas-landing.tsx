"use client"

import * as React from "react"
import { Check, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function SaasLanding() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4">
                Novo Lançamento v2.0
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Acelere seu negócio com <span className="text-primary">Inteligência Artificial</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Automatize processos, otimize vendas e tome decisões baseadas em dados com nossa plataforma all-in-one.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg">Começar Agora</Button>
              <Button size="lg" variant="outline">
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="w-full py-12 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex justify-center font-bold text-xl">ACME Corp</div>
            <div className="flex justify-center font-bold text-xl">GlobalTech</div>
            <div className="flex justify-center font-bold text-xl">Nebula Inc</div>
            <div className="flex justify-center font-bold text-xl">CloudScale</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Analytics Avançado</h3>
              <p className="text-muted-foreground">
                Dashboards em tempo real com métricas cruciais para o crescimento do seu negócio.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Automação Completa</h3>
              <p className="text-muted-foreground">
                Crie fluxos de trabalho automatizados que economizam horas da sua equipe semanalmente.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                <ArrowRight className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Integração Fácil</h3>
              <p className="text-muted-foreground">
                Conecte-se com mais de 50 ferramentas populares com apenas alguns cliques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
           <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Preços Simples</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Escolha o plano ideal para sua escala.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            {[
              { name: "Starter", price: "$29", features: ["Até 5 usuários", "Analytics Básico", "Suporte por Email"] },
              { name: "Pro", price: "$79", features: ["Até 20 usuários", "Analytics Avançado", "Suporte Prioritário", "API Access"], popular: true },
              { name: "Enterprise", price: "Custom", features: ["Usuários Ilimitados", "Analytics Customizado", "Gerente de Conta", "SLA 99.9%"] }
            ].map((plan) => (
              <div key={plan.name} className={`flex flex-col p-6 bg-background rounded-xl border shadow-sm ${plan.popular ? 'border-primary ring-1 ring-primary relative' : ''}`}>
                {plan.popular && <Badge className="absolute top-0 right-0 -mt-3 mr-4">Popular</Badge>}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="text-4xl font-bold">{plan.price}<span className="text-sm font-normal text-muted-foreground">/mês</span></div>
                </div>
                <ul className="flex-1 my-6 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>Escolher Plano</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
       <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pronto para transformar sua empresa?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                Junte-se a mais de 10.000 empresas que usam nossa plataforma hoje.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" variant="secondary" className="text-primary hover:bg-white">
                Começar Teste Grátis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-background border-t">
         <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Acme Inc. Todos os direitos reservados.</p>
            <div className="flex gap-4">
               <a href="#" className="hover:underline">Termos</a>
               <a href="#" className="hover:underline">Privacidade</a>
               <a href="#" className="hover:underline">Contato</a>
            </div>
         </div>
      </footer>
    </div>
  )
}
