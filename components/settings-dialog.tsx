"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ThemeSelector } from "@/components/theme-selector"
import { SectionToggle } from "@/components/section-toggle"
import { TypographySettings } from "@/components/typography-settings"
import { ComponentStyleSettings } from "@/components/component-style-settings"
import { WhatsappSettings } from "@/components/whatsapp-settings"
import { Palette, Eye, Settings } from "lucide-react"

interface SettingsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[60vw] w-full max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Configurações do Template
          </DialogTitle>
          <DialogDescription>
            Personalize a aparência e o conteúdo da landing page.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 px-6 py-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-2">
            {/* Column 1: Cores, Estilo, WhatsApp */}
            <div className="space-y-6">
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
              <ComponentStyleSettings />
              <WhatsappSettings />
            </div>

            {/* Column 2: Tipografia */}
            <div className="space-y-6">
              <TypographySettings />
            </div>

            {/* Column 3: Seções */}
            <div className="space-y-6">
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
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
