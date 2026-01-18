"use client"

import { useSettings } from "@/hooks/use-settings"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { GripVertical } from "lucide-react"

export function SectionSettings() {
  const { settings, toggleSection } = useSettings()

  // Verificação de segurança
  if (!settings?.sections) return <div className="p-4 text-sm">Carregando seções...</div>

  return (
    <div className="grid gap-4">
      <Card className="border-border/50 shadow-sm">
        <CardContent className="p-0">
          <ScrollArea className="h-[300px] w-full rounded-md">
            <div className="p-4 grid gap-4">
              {settings.sections.map((section) => (
                <div
                  key={section.id}
                  className="flex items-center justify-between space-x-4 rounded-lg border p-3 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <GripVertical className="h-4 w-4 text-muted-foreground/50 cursor-grab" />
                    <div className="space-y-0.5">
                      <Label className="text-sm font-medium cursor-pointer" htmlFor={`section-${section.id}`}>
                        {section.label || section.id}
                      </Label>
                    </div>
                  </div>
                  <Switch
                    id={`section-${section.id}`}
                    checked={section.enabled}
                    onCheckedChange={() => toggleSection(section.id)}
                  />
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
      <p className="text-xs text-muted-foreground text-center">
        Ative ou desative as seções que deseja exibir na sua Landing Page.
      </p>
    </div>
  )
}