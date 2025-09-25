"use client"

import { useSettings } from "@/hooks/use-settings"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Type, Text, Rows } from "lucide-react"

// Lista de fontes que vamos oferecer. Inclui a padrão e algumas do Google Fonts.
const fontOptions = [
  { value: "Geist Sans", label: "Geist Sans (Padrão)" },
  { value: "Roboto", label: "Roboto" },
  { value: "Open Sans", label: "Open Sans" },
  { value: "Lato", label: "Lato" },
  { value: "Montserrat", label: "Montserrat" },
  { value: "Poppins", label: "Poppins" },
]

import { Bold } from "lucide-react"

const fontWeightOptions = [
  { value: 300, label: "Leve" },
  { value: 400, label: "Normal" },
  { value: 500, label: "Médio" },
  { value: 600, label: "Semi-negrito" },
  { value: 700, label: "Negrito" },
]

export function TypographySettings() {
  const { settings, setTypography } = useSettings()
  const { fontFamily, fontSizeScale, lineHeight, fontWeight } = settings.typography

  const selectedWeightLabel = fontWeightOptions.find((w) => w.value === fontWeight)?.label || "Normal"

  return (
    <div className="bg-background rounded-lg p-6 border shadow-sm space-y-6">
      <div className="flex items-center gap-2">
        <Type className="w-5 h-5 text-primary" />
        <h4 className="font-semibold">Tipografia Avançada</h4>
      </div>

      {/* Seletor de Fonte */}
      <div className="space-y-2">
        <Label htmlFor="font-family" className="text-sm flex items-center gap-2">
          <Text className="w-4 h-4" />
          Fonte Principal
        </Label>
        <Select value={fontFamily} onValueChange={(value) => setTypography({ fontFamily: value })}>
          <SelectTrigger id="font-family">
            <SelectValue placeholder="Escolha uma fonte" />
          </SelectTrigger>
          <SelectContent>
            {fontOptions.map((font) => (
              <SelectItem key={font.value} value={font.value}>
                {font.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Controle de Tamanho de Fonte */}
      <div className="space-y-2">
        <Label htmlFor="font-size" className="text-sm flex items-center gap-2">
          <Text className="w-4 h-4" />
          Escala de Tamanho ({Math.round(fontSizeScale * 100)}%)
        </Label>
        <Slider
          id="font-size"
          min={0.8}
          max={1.3}
          step={0.05}
          value={[fontSizeScale]}
          onValueChange={([value]) => setTypography({ fontSizeScale: value })}
        />
        <p className="text-xs text-muted-foreground">Ajuste o tamanho de todos os textos.</p>
      </div>

      {/* Controle de Espaçamento entre Linhas */}
      <div className="space-y-2">
        <Label htmlFor="line-height" className="text-sm flex items-center gap-2">
          <Rows className="w-4 h-4" />
          Altura da Linha ({lineHeight.toFixed(2)})
        </Label>
        <Slider
          id="line-height"
          min={1.2}
          max={2.0}
          step={0.1}
          value={[lineHeight]}
          onValueChange={([value]) => setTypography({ lineHeight: value })}
        />
        <p className="text-xs text-muted-foreground">Controle o espaçamento vertical dos parágrafos.</p>
      </div>

      {/* Controle de Peso da Fonte */}
      <div className="space-y-2">
        <Label htmlFor="font-weight" className="text-sm flex items-center gap-2">
          <Bold className="w-4 h-4" />
          Peso da Fonte ({selectedWeightLabel})
        </Label>
        <Slider
          id="font-weight"
          min={300}
          max={700}
          step={100}
          value={[fontWeight]}
          onValueChange={([value]) => setTypography({ fontWeight: value })}
        />
        <p className="text-xs text-muted-foreground">Ajuste a espessura da fonte principal.</p>
      </div>
    </div>
  )
}