"use client"

import { Check, X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

export function PricingComparison() {
  const tiers = [
    { name: "Start", price: "R$ 0", id: "start" },
    { name: "Growth", price: "R$ 199", id: "growth", primary: true },
    { name: "Scale", price: "R$ 499", id: "scale" },
  ]

  const sections = [
    {
      name: "Recursos Gerais",
      features: [
        { name: "Usuários", tiers: { start: "1", growth: "5", scale: "Ilimitado" } },
        { name: "Projetos Ativos", tiers: { start: "3", growth: "20", scale: "Ilimitado" } },
        { name: "Armazenamento", tiers: { start: "1GB", growth: "50GB", scale: "1TB" } },
        { name: "Domínio Personalizado", tiers: { start: false, growth: true, scale: true } },
      ],
    },
    {
      name: "Analytics & Relatórios",
      features: [
        { name: "Dashboard Básico", tiers: { start: true, growth: true, scale: true } },
        { name: "Relatórios Exportáveis", tiers: { start: false, growth: true, scale: true } },
        { name: "Análise de Coorte", tiers: { start: false, growth: false, scale: true } },
        { name: "Acesso à API", tiers: { start: false, growth: true, scale: true } },
      ],
    },
    {
      name: "Segurança",
      features: [
        { name: "HTTPS/SSL", tiers: { start: true, growth: true, scale: true } },
        { name: "2FA", tiers: { start: true, growth: true, scale: true } },
        { name: "Audit Logs", tiers: { start: false, growth: true, scale: true } },
        { name: "SSO", tiers: { start: false, growth: false, scale: true } },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Compare todos os recursos</h2>
        <p className="text-muted-foreground">Analise detalhadamente o que cada plano oferece para o seu negócio.</p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="p-4"></div>
            {tiers.map((tier) => (
              <div key={tier.id} className="text-center px-4">
                <h3 className="font-bold text-lg">{tier.name}</h3>
                <div className="text-2xl font-bold my-2">{tier.price}</div>
                <Button variant={tier.primary ? "default" : "outline"} className="w-full" asChild>
                   <Link href={`/pricing/checkout?plan=${tier.id}`}>Escolher {tier.name}</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.name}>
                <h4 className="font-bold text-sm uppercase text-muted-foreground mb-4 border-b pb-2">{section.name}</h4>
                <div className="space-y-4">
                  {section.features.map((feature) => (
                    <div key={feature.name} className="grid grid-cols-4 gap-4 items-center py-2 border-b last:border-0 border-dashed">
                      <div className="flex items-center gap-2 px-2 font-medium text-sm">
                        {feature.name}
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-3 w-3 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Mais detalhes sobre {feature.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      {tiers.map((tier) => {
                        const value = feature.tiers[tier.id as keyof typeof feature.tiers]
                        return (
                          <div key={tier.id} className="text-center">
                            {typeof value === "boolean" ? (
                              value ? <Check className="h-5 w-5 text-primary mx-auto" /> : <div className="w-4 h-0.5 bg-muted-foreground/30 mx-auto" />
                            ) : (
                              <span className="text-sm">{value}</span>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
