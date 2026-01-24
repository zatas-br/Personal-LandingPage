"use client"

import * as React from "react"
import { Check, X, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

export function DetailedPricing() {
  const plans = [
    {
      name: "Starter",
      price: "R$ 297",
      description: "Essencial para pequenos negócios.",
      buttonVariant: "outline" as const,
    },
    {
      name: "Professional",
      price: "R$ 597",
      description: "O mais escolhido para crescimento.",
      popular: true,
      buttonVariant: "default" as const,
    },
    {
      name: "Enterprise",
      price: "Sob Consulta",
      description: "Para grandes operações.",
      buttonVariant: "outline" as const,
    },
  ]

  interface FeatureItem {
    name: string
    starter: string | boolean
    pro: string | boolean
    ent: string | boolean
    tip?: string
  }

  const features: { category: string; items: FeatureItem[] }[] = [
    {
      category: "Recursos Principais",
      items: [
        { name: "Usuários", starter: "1", pro: "5", ent: "Ilimitado", tip: "Número de membros da equipe com acesso." },
        { name: "Projetos", starter: "3", pro: "20", ent: "Ilimitado", tip: "Quantidade de projetos ativos." },
        { name: "Armazenamento", starter: "5GB", pro: "50GB", ent: "1TB", tip: "Espaço total para arquivos e mídia." },
        { name: "Domínio Personalizado", starter: false, pro: true, ent: true, tip: "Use seu próprio domínio (ex: seunsite.com)." },
      ],
    },
    {
      category: "Marketing & Vendas",
      items: [
        { name: "Email Marketing", starter: "1.000/mês", pro: "10.000/mês", ent: "100.000/mês" },
        { name: "Automação", starter: false, pro: "Básica", ent: "Avançada" },
        { name: "CRM Integrado", starter: false, pro: true, ent: true },
        { name: "Remoção de Branding", starter: false, pro: true, ent: true },
      ],
    },
    {
      category: "Suporte",
      items: [
        { name: "Tipo de Suporte", starter: "Email", pro: "Email & Chat", ent: "Gerente Dedicado" },
        { name: "SLA de Resposta", starter: "48h", pro: "12h", ent: "1h" },
        { name: "Setup Inicial", starter: false, pro: false, ent: true },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Comparativo de Planos</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Veja em detalhes o que cada plano oferece e escolha o melhor para o seu momento.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr>
              <th className="text-left p-4 w-1/4"></th>
              {plans.map((plan, i) => (
                <th key={i} className={`p-4 text-center align-top w-1/4 ${plan.popular ? "bg-primary/5 rounded-t-xl border-t border-l border-r border-primary/20" : ""}`}>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-bold text-xl">{plan.name}</h3>
                    {plan.popular && <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">Popular</span>}
                    <div className="text-2xl font-bold mt-2">{plan.price}</div>
                    <p className="text-xs text-muted-foreground font-normal mb-4 px-4">{plan.description}</p>
                    <Button variant={plan.buttonVariant} className="w-full max-w-[160px]" asChild>
                      <Link href={`/pricing/checkout?plan=${plan.name.toLowerCase()}`}>Assinar</Link>
                    </Button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((section, sIdx) => (
              <React.Fragment key={`sec-${sIdx}`}>
                <tr>
                  <td colSpan={4} className="p-4 bg-muted/20 font-semibold text-sm uppercase tracking-wider text-muted-foreground mt-8">
                    {section.category}
                  </td>
                </tr>
                {section.items.map((feature, fIdx) => (
                  <tr key={`feat-${sIdx}-${fIdx}`} className="border-b hover:bg-muted/5 transition-colors">
                    <td className="p-4 flex items-center gap-2">
                      <span>{feature.name}</span>
                      {feature.tip && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 text-muted-foreground/50" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs text-sm">{feature.tip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </td>
                    <td className={`p-4 text-center ${plans[0].popular ? "bg-primary/5 border-l border-r border-primary/20" : ""}`}>
                      {typeof feature.starter === "boolean" ? (
                        feature.starter ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/30 mx-auto" />
                      ) : (
                        <span className="text-sm">{feature.starter}</span>
                      )}
                    </td>
                    <td className={`p-4 text-center ${plans[1].popular ? "bg-primary/5 border-l border-r border-primary/20" : ""}`}>
                      {typeof feature.pro === "boolean" ? (
                        feature.pro ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/30 mx-auto" />
                      ) : (
                        <span className="text-sm font-medium">{feature.pro}</span>
                      )}
                    </td>
                    <td className={`p-4 text-center ${plans[2].popular ? "bg-primary/5 border-l border-r border-primary/20" : ""}`}>
                      {typeof feature.ent === "boolean" ? (
                        feature.ent ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/30 mx-auto" />
                      ) : (
                        <span className="text-sm font-medium">{feature.ent}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
