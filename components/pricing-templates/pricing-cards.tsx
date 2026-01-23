"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import Link from "next/link"

export function PricingCards() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Básico",
      description: "Ideal para indivíduos e hobbyistas.",
      price: isAnnual ? "290" : "29",
      features: ["1 Projeto", "5GB Armazenamento", "Suporte da Comunidade"],
      cta: "Começar Grátis",
      variant: "outline"
    },
    {
      name: "Pro",
      description: "Para profissionais que precisam de mais poder.",
      price: isAnnual ? "990" : "99",
      features: ["Projetos Ilimitados", "50GB Armazenamento", "Suporte Prioritário", "Analytics Avançado"],
      cta: "Assinar Pro",
      variant: "default",
      popular: true
    },
    {
      name: "Empresarial",
      description: "Segurança e controle para times.",
      price: isAnnual ? "2990" : "299",
      features: ["SSO & SAML", "Armazenamento Ilimitado", "Gerente de Conta", "SLA de 99.9%"],
      cta: "Falar com Vendas",
      variant: "outline"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Planos Simples e Transparentes</h2>
        <div className="flex items-center justify-center gap-4 mt-6">
          <span className={`text-sm ${!isAnnual ? "font-bold" : "text-muted-foreground"}`}>Mensal</span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
          <span className={`text-sm ${isAnnual ? "font-bold" : "text-muted-foreground"}`}>
            Anual <span className="text-green-600 text-xs ml-1 font-medium bg-green-100 px-2 py-0.5 rounded-full">-20%</span>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative flex flex-col ${plan.popular ? "border-primary shadow-lg scale-105 z-10" : ""}`}>
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                MAIS POPULAR
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ {plan.price}</span>
                <span className="text-muted-foreground">/{isAnnual ? "ano" : "mês"}</span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.variant as "default" | "outline"} asChild>
                <Link href="/pricing/checkout">{plan.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
