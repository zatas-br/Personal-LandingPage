"use client"

import { useSettings } from "@/hooks/use-settings"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"

export function ComponentStyleSettings() {
  const { settings, updateSettings, resetSettings } = useSettings()

  return (
    <div className="grid gap-6">
      <Card className="border-border/50 shadow-sm">
        <CardContent className="p-5 grid gap-6">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label className="text-base">Raio da Borda (Radius)</Label>
              <p className="text-sm text-muted-foreground">
                Arredondamento dos botões e cards: {settings.radius}rem
              </p>
            </div>
          </div>
          <Slider
            value={[settings.radius]}
            min={0}
            max={2}
            step={0.1}
            onValueChange={([value]) => updateSettings({ radius: value })}
            className="w-full"
          />
        </CardContent>
      </Card>

      <Card className="border-border/50 shadow-sm">
        <CardContent className="p-5 grid gap-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Modo Escuro</Label>
              <p className="text-sm text-muted-foreground">
                Alternar entre tema claro e escuro.
              </p>
            </div>
            <Switch
              checked={settings.theme === "dark"}
              onCheckedChange={(checked) =>
                updateSettings({ theme: checked ? "dark" : "light" })
              }
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end pt-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={resetSettings}
          className="text-muted-foreground hover:text-foreground"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Restaurar Padrões
        </Button>
      </div>
    </div>
  )
}