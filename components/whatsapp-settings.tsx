"use client"

import { useSettings } from "@/hooks/use-settings"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone } from "lucide-react"

export function WhatsappSettings() {
  // Agora usamos updateSettings em vez de setWhatsapp
  const { settings, updateSettings } = useSettings()

  const handleToggle = (checked: boolean) => {
    updateSettings({
      whatsapp: {
        ...settings.whatsapp, // Mantém o número existente
        enabled: checked
      }
    })
  }

  const handleNumberChange = (value: string) => {
    updateSettings({
      whatsapp: {
        ...settings.whatsapp, // Mantém o status enabled
        number: value
      }
    })
  }

  return (
    <div className="grid gap-6">
      <Card className="border-border/50 shadow-sm">
        <CardContent className="p-5 space-y-6">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-full">
                <Smartphone className="w-6 h-6 text-green-600 dark:text-green-500" />
              </div>
              <div className="space-y-0.5">
                <Label htmlFor="whatsapp-enabled" className="text-base">
                  Ativar Botão Flutuante
                </Label>
                <p className="text-sm text-muted-foreground">
                  Exibe um ícone do WhatsApp no canto da tela.
                </p>
              </div>
            </div>
            <Switch
              id="whatsapp-enabled"
              checked={settings.whatsapp?.enabled || false}
              onCheckedChange={handleToggle}
            />
          </div>

          {settings.whatsapp?.enabled && (
            <div className="space-y-2 animate-in fade-in-50 slide-in-from-top-2">
              <Label htmlFor="whatsapp-number">Número do WhatsApp</Label>
              <Input
                id="whatsapp-number"
                placeholder="5511999999999"
                value={settings.whatsapp?.number || ""}
                onChange={(e) => handleNumberChange(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Digite o número completo com DDD e código do país (ex: 55 para Brasil), apenas números.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}