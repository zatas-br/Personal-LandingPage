"use client"

import { ThemeSelector } from "@/components/theme-selector"
import { SectionToggle } from "@/components/section-toggle"
import { Settings, Palette, Eye } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function SettingsPanel() {
  return (
    <div className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Settings className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Configurações do Template</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Personalize a aparência e o conteúdo da landing page conforme suas necessidades
            </p>
          </div>

import { TypographySettings } from "@/components/typography-settings"
import { SpacingSettings } from "@/components/spacing-settings"
import { ComponentStyleSettings } from "@/components/component-style-settings"

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {/* Coluna 1: Controles Principais */}
            <div className="space-y-8">
              {/* Seletor de Temas */}
              <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Paleta de Cores</h4>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Escolha a paleta de cores que melhor representa sua marca
              </p>
              <ThemeSelector />
              </div>
              {/* Configurações de Estilo de Componente */}
              <ComponentStyleSettings />
            </div>

            {/* Coluna 2: Tipografia */}
            <div className="lg:col-span-1">
              <TypographySettings />
            </div>

            {/* Coluna 3: Seções */}
            <div className="lg:col-span-1">
               <div className="bg-background rounded-lg p-6 border shadow-sm h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Seções Visíveis</h4>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Ative ou desative seções conforme o tipo do seu negócio
                </p>
                <SectionToggle />
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-sm text-muted-foreground">
            <p>
              💡 <strong>Dica:</strong> Estas configurações são salvas localmente no seu navegador. Para usar em
              produção, integre com seu sistema de gerenciamento de conteúdo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
