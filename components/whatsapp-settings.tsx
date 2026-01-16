"use client"

import { useSettings } from "@/hooks/use-settings"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { MessageCircle } from "lucide-react"

export function WhatsappSettings() {
  const { settings, setWhatsapp } = useSettings()

  return (
    <div className="bg-background rounded-lg p-6 border shadow-sm h-full">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="w-5 h-5 text-primary" />
        <h4 className="font-semibold">WhatsApp Flutuante</h4>
      </div>
      <p className="text-muted-foreground text-sm mb-4">
        Adicione um botão de WhatsApp flutuante para facilitar o contato.
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="whatsapp-enabled">Habilitar botão</Label>
          <Switch
            id="whatsapp-enabled"
            checked={settings.whatsapp?.enabled || false}
            onCheckedChange={(checked) => setWhatsapp({ enabled: checked })}
          />
        </div>

        {settings.whatsapp?.enabled && (
          <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
            <Label htmlFor="whatsapp-number">Número (com DDD)</Label>
            <Input
              id="whatsapp-number"
              placeholder="Ex: 5511999999999"
              value={settings.whatsapp?.number || ""}
              onChange={(e) => setWhatsapp({ number: e.target.value })}
            />
            <p className="text-xs text-muted-foreground">
              Apenas números. Ex: 55 para Brasil, 11 para SP.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
