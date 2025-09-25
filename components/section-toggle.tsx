"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SectionConfig {
  id: string
  label: string
  description: string
  enabled: boolean
  essential?: boolean
}

export function SectionToggle() {
  const [sections, setSections] = useState<SectionConfig[]>([
    {
      id: "hero",
      label: "Seção Principal",
      description: "Banner inicial com call-to-action",
      enabled: true,
      essential: true,
    },
    { id: "about", label: "Quem Sou Eu", description: "Apresentação pessoal/empresa", enabled: true },
    { id: "technology", label: "Nossa Tecnologia", description: "Showcase de tecnologias", enabled: true },
    { id: "app", label: "Nosso Aplicativo", description: "Demonstração do app mobile", enabled: true },
    { id: "partners", label: "Parceiros", description: "Logos de empresas parceiras", enabled: true },
    { id: "how-it-works", label: "Como Funciona", description: "Processo passo a passo", enabled: true },
    { id: "features", label: "Recursos", description: "Lista de funcionalidades", enabled: true },
    { id: "results", label: "Seus Resultados", description: "Métricas e conquistas", enabled: true },
    { id: "testimonials", label: "Depoimentos", description: "Feedback de clientes", enabled: true },
    { id: "pricing", label: "Planos", description: "Tabela de preços", enabled: true },
    { id: "guarantee", label: "Garantia", description: "Políticas de satisfação", enabled: true },
    { id: "faq", label: "FAQ", description: "Perguntas frequentes", enabled: true },
    { id: "newsletter", label: "Newsletter", description: "Inscrição para conteúdo", enabled: true },
    {
      id: "contact",
      label: "Contato",
      description: "Formulário e informações",
      enabled: true,
      essential: true,
    },
  ])

  const handleToggle = (sectionId: string) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId && !section.essential ? { ...section, enabled: !section.enabled } : section,
      ),
    )

    // Aplicar mudanças no DOM
    const sectionElement = document.getElementById(`section-${sectionId}`)
    if (sectionElement) {
      const section = sections.find((s) => s.id === sectionId)
      if (section && !section.essential) {
        sectionElement.style.display = section.enabled ? "none" : "block"
      }
    }
  }

  return (
    <div className="space-y-4">
      <ScrollArea className="h-80 w-full">
        <div className="space-y-4 pr-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="flex items-center justify-between space-x-3 p-3 rounded-lg border bg-card/50"
            >
              <div className="flex-1 min-w-0">
                <Label
                  htmlFor={section.id}
                  className={`text-sm font-medium block ${section.essential ? "text-muted-foreground" : ""}`}
                >
                  {section.label}
                  {section.essential && <span className="text-xs text-primary ml-1">(Essencial)</span>}
                </Label>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{section.description}</p>
              </div>
              <Switch
                id={section.id}
                checked={section.enabled}
                onCheckedChange={() => handleToggle(section.id)}
                disabled={section.essential}
              />
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="pt-2 border-t text-center">
        <p className="text-xs text-muted-foreground">💡 Seções essenciais não podem ser desativadas</p>
      </div>
    </div>
  )
}
