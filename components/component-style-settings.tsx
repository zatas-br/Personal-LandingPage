"use client"

import { useSettings } from "@/hooks/use-settings"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Square, Circle } from "lucide-react"

export function ComponentStyleSettings() {
  const { settings, setComponentStyle } = useSettings()
  const { borderRadius } = settings.componentStyle

  return (
    <div className="bg-background rounded-lg p-6 border shadow-sm space-y-6">
      <div className="flex items-center gap-2">
        <Square className="w-5 h-5 text-primary" />
        <h4 className="font-semibold">Estilo dos Componentes</h4>
      </div>

      {/* Controle de Raio da Borda */}
      <div className="space-y-2">
        <Label htmlFor="border-radius" className="text-sm flex items-center gap-2">
          <Circle className="w-4 h-4" />
          Raio da Borda ({borderRadius.toFixed(2)}rem)
        </Label>
        <Slider
          id="border-radius"
          min={0}
          max={2}
          step={0.1}
          value={[borderRadius]}
          onValueChange={([value]) => setComponentStyle({ borderRadius: value })}
        />
        <p className="text-xs text-muted-foreground">Controla o arredondamento de botões, cards, etc.</p>
      </div>
    </div>
  )
}