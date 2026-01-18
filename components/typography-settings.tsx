"use client"

import { useSettings } from "@/hooks/use-settings"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TypographySettings() {
  const { settings, updateSettings } = useSettings()

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2">
         <Card className="border-border/50 shadow-sm">
          <CardContent className="p-5 space-y-4">
            <div className="space-y-2">
              <Label>Fonte Principal</Label>
              <Select
                value={settings.fontFamily}
                onValueChange={(value) => updateSettings({ fontFamily: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a fonte" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inter">Inter (Padrão)</SelectItem>
                  <SelectItem value="manrope">Manrope</SelectItem>
                  <SelectItem value="system">System UI</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50 shadow-sm">
        <CardContent className="p-5 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
               <Label className="text-base">Tamanho Base da Fonte</Label>
               <span className="text-sm font-medium text-muted-foreground">{settings.baseFontSize}px</span>
            </div>
            <Slider
              value={[settings.baseFontSize]}
              min={12}
              max={20}
              step={1}
              onValueChange={([value]) => updateSettings({ baseFontSize: value })}
            />
             <p className="text-xs text-muted-foreground">Afeta todos os textos do site proporcionalmente.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}