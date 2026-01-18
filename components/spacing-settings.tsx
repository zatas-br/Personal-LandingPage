"use client"

import { useSettings } from "@/hooks/use-settings"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"

export function SpacingSettings() {
  const { settings, updateSettings } = useSettings()

  return (
    <div className="grid gap-6">
      <Card className="border-border/50 shadow-sm">
        <CardContent className="p-5 space-y-6">
           <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base">Largura do Container</Label>
              <span className="text-sm font-medium text-muted-foreground">{settings.containerWidth}px</span>
            </div>
            <Slider
              value={[settings.containerWidth]}
              min={800}
              max={1600}
              step={20}
              onValueChange={([value]) => updateSettings({ containerWidth: value })}
            />
            <p className="text-xs text-muted-foreground">Define a largura máxima do conteúdo centralizado.</p>
          </div>

          <Separator className="bg-border/50" />

          <div className="space-y-4">
             <div className="flex items-center justify-between">
              <Label className="text-base">Espaçamento de Seção (Padding Y)</Label>
              <span className="text-sm font-medium text-muted-foreground">{settings.sectionSpacing}rem</span>
            </div>
            <Slider
              value={[settings.sectionSpacing]}
              min={2}
              max={10}
              step={0.5}
              onValueChange={([value]) => updateSettings({ sectionSpacing: value })}
            />
             <p className="text-xs text-muted-foreground">Espaço vertical interno entre as seções.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}