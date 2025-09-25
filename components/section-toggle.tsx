"use client"

import { useSettings } from "@/hooks/use-settings"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"

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

export function SectionToggle() {
  const { settings, toggleSection } = useSettings()

  return (
    <div className="space-y-4">
      <ScrollArea className="h-80 w-full">
        <div className="space-y-4 pr-4">
          {sectionDetails.map((detail) => {
            // Encontra o estado da seção correspondente no contexto global
            const sectionState = settings.sections.find((s) => s.id === detail.id)
            const isEnabled = sectionState ? sectionState.enabled : true // Garante um fallback

            return (
              <div
                key={detail.id}
                className="flex items-center justify-between space-x-3 p-3 rounded-lg border bg-card/50"
              >
                <div className="flex-1 min-w-0">
                  <Label
                    htmlFor={detail.id}
                    className={`text-sm font-medium block ${detail.essential ? "text-muted-foreground" : ""}`}
                  >
                    {detail.label}
                    {detail.essential && <span className="text-xs text-primary ml-1">(Essencial)</span>}
                  </Label>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{detail.description}</p>
                </div>
                <Switch
                  id={detail.id}
                  checked={isEnabled}
                  onCheckedChange={() => toggleSection(detail.id)}
                  disabled={detail.essential}
                />
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