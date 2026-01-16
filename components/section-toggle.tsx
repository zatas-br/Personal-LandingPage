"use client"

import { useSettings } from "@/hooks/use-settings"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LayoutTemplate } from "lucide-react"

// A configuração visual das seções (label, description) permanece aqui.
// O estado 'enabled' virá do contexto global.
const sectionDetails = [
  {
    id: "hero",
    label: "Seção Principal",
    description: "Banner inicial com call-to-action",
    essential: true,
  },
  { id: "about", label: "Quem Sou Eu", description: "Apresentação pessoal/empresa", essential: false },
  { id: "technology", label: "Nossa Tecnologia", description: "Showcase de tecnologias", essential: false },
  { id: "app", label: "Nosso Aplicativo", description: "Demonstração do app mobile", essential: false },
  { id: "partners", label: "Parceiros", description: "Logos de empresas parceiras", essential: false },
  { id: "how-it-works", label: "Como Funciona", description: "Processo passo a passo", essential: false },
  { id: "features", label: "Recursos", description: "Lista de funcionalidades", essential: false },
  { id: "results", label: "Seus Resultados", description: "Métricas e conquistas", essential: false },
  { id: "testimonials", label: "Depoimentos", description: "Feedback de clientes", essential: false },
  { id: "pricing", label: "Planos", description: "Tabela de preços", essential: false },
  { id: "guarantee", label: "Garantia", description: "Políticas de satisfação", essential: false },
  { id: "faq", label: "FAQ", description: "Perguntas frequentes", essential: false },
  { id: "newsletter", label: "Newsletter", description: "Inscrição para conteúdo", essential: false },
  {
    id: "contact",
    label: "Contato",
    description: "Formulário e informações",
    essential: true,
  },
]

const supportedLayouts = ["hero", "features", "testimonials", "pricing"]

export function SectionToggle() {
  const { settings, toggleSection, setSectionLayout } = useSettings()

  return (
    <div className="space-y-4">
      <ScrollArea className="h-[400px] w-full pr-4">
        <div className="space-y-3">
          {sectionDetails.map((detail) => {
            // Encontra o estado da seção correspondente no contexto global
            const sectionState = settings.sections.find((s) => s.id === detail.id)
            const isEnabled = sectionState ? sectionState.enabled : true // Garante um fallback
            const hasLayoutOptions = supportedLayouts.includes(detail.id)

            return (
              <div
                key={detail.id}
                className="p-3 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1 min-w-0">
                    <Label
                      htmlFor={detail.id}
                      className={`text-sm font-medium block cursor-pointer ${
                        detail.essential ? "text-muted-foreground" : ""
                      }`}
                    >
                      {detail.label}
                      {detail.essential && <span className="text-xs text-primary ml-1">(Essencial)</span>}
                    </Label>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{detail.description}</p>
                  </div>
                  <Switch
                    id={detail.id}
                    checked={isEnabled}
                    onCheckedChange={() => toggleSection(detail.id)}
                    disabled={detail.essential}
                    className="mt-0.5"
                  />
                </div>

                {hasLayoutOptions && isEnabled && (
                  <div className="mt-3 pl-0 border-t pt-3 flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <LayoutTemplate className="w-3.5 h-3.5" />
                      <span>Layout:</span>
                    </div>
                    <Select
                      value={sectionState?.layout || "layout1"}
                      onValueChange={(val) => setSectionLayout(detail.id, val as "layout1" | "layout2")}
                    >
                      <SelectTrigger className="h-7 text-xs w-[140px] bg-background">
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="layout1">Clássico</SelectItem>
                        <SelectItem value="layout2">Alternativo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </ScrollArea>
      <div className="pt-2 border-t text-center">
        <p className="text-xs text-muted-foreground">💡 Seções essenciais não podem ser desativadas</p>
      </div>
    </div>
  )
}
