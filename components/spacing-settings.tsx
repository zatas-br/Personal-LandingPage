"use client"

import { useSettings } from "@/hooks/use-settings"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { StretchVertical, Grid3x3 } from "lucide-react"

export function SpacingSettings() {
  const { settings, setSpacing } = useSettings()
  const { sectionPadding, itemGap } = settings.spacing

  return (
    <div className="bg-background rounded-lg p-6 border shadow-sm space-y-6">
      <div className="flex items-center gap-2">
        <Grid3x3 className="w-5 h-5 text-primary" />
        <h4 className="font-semibold">Espaçamentos</h4>
      </div>

      {/* Controle de Padding das Seções */}
      <div className="space-y-2">
        <Label htmlFor="section-padding" className="text-sm flex items-center gap-2">
          <StretchVertical className="w-4 h-4" />
          Padding da Seção ({sectionPadding}rem)
        </Label>
        <Slider
          id="section-padding"
          min={4}
          max={12}
          step={1}
          value={[sectionPadding]}
          onValueChange={([value]) => setSpacing({ sectionPadding: value })}
        />
        <p className="text-xs text-muted-foreground">Controla o espaçamento vertical (acima e abaixo) de cada seção.</p>
      </div>

      {/* Controle de Gap entre Itens */}
      <div className="space-y-2">
        <Label htmlFor="item-gap" className="text-sm flex items-center gap-2">
          <Grid3x3 className="w-4 h-4" />
          Gap entre Itens ({itemGap}rem)
        </Label>
        <Slider
          id="item-gap"
          min={1}
          max={4}
          step={0.5}
          value={[itemGap]}
          onValueChange={([value]) => setSpacing({ itemGap: value })}
        />
        <p className="text-xs text-muted-foreground">Controla o espaçamento entre cards, colunas, etc.</p>
      </div>
    </div>
  )
}