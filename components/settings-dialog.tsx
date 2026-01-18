"use client"

import * as React from "react"
import { Settings, Type, Palette, Layout, Smartphone, Layers } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ComponentStyleSettings } from "@/components/component-style-settings"
import { TypographySettings } from "@/components/typography-settings"
import { SpacingSettings } from "@/components/spacing-settings"
import { WhatsappSettings } from "@/components/whatsapp-settings"
import { SectionSettings } from "@/components/section-settings"

interface SettingsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] md:max-w-2xl lg:max-w-3xl max-h-[90vh] flex flex-col p-0 gap-0 overflow-hidden rounded-xl border-border/40 shadow-2xl">
        <DialogHeader className="p-6 pb-4 border-b bg-muted/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Settings className="w-5 h-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl">Configurações do Template</DialogTitle>
              <DialogDescription className="text-muted-foreground mt-1">
                Personalize a aparência e a estrutura do seu site.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden flex flex-col">
          <Tabs defaultValue="sections" className="flex-1 flex flex-col overflow-hidden">
            <div className="px-6 pt-4 shrink-0">
              <TabsList className="w-full justify-start h-auto p-1 bg-muted/50 rounded-lg overflow-x-auto flex-nowrap md:grid md:grid-cols-5 gap-1">
                 <TabsTrigger value="sections" className="gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                  <Layers className="w-4 h-4" />
                  <span className="hidden md:inline">Seções</span>
                  <span className="md:hidden">Seções</span>
                </TabsTrigger>
                <TabsTrigger value="style" className="gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                  <Palette className="w-4 h-4" />
                  <span className="hidden md:inline">Estilo</span>
                  <span className="md:hidden">Estilo</span>
                </TabsTrigger>
                <TabsTrigger value="typography" className="gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                  <Type className="w-4 h-4" />
                  <span className="hidden md:inline">Texto</span>
                  <span className="md:hidden">Texto</span>
                </TabsTrigger>
                <TabsTrigger value="spacing" className="gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                  <Layout className="w-4 h-4" />
                  <span className="hidden md:inline">Layout</span>
                  <span className="md:hidden">Layout</span>
                </TabsTrigger>
                <TabsTrigger value="whatsapp" className="gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                  <Smartphone className="w-4 h-4" />
                  <span className="hidden md:inline">WhatsApp</span>
                  <span className="md:hidden">Whats</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <Separator className="mt-4" />

            <ScrollArea className="flex-1">
              <div className="p-6">
                <TabsContent value="sections" className="mt-0 space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-medium text-lg">Gerenciar Seções</h3>
                    <p className="text-sm text-muted-foreground">Escolha quais blocos serão exibidos na página.</p>
                  </div>
                  <SectionSettings />
                </TabsContent>

                <TabsContent value="style" className="mt-0 space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-medium text-lg">Cores e Bordas</h3>
                    <p className="text-sm text-muted-foreground">Defina o arredondamento e tema visual.</p>
                  </div>
                  <ComponentStyleSettings />
                </TabsContent>
                
                <TabsContent value="typography" className="mt-0 space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-medium text-lg">Fontes e Textos</h3>
                    <p className="text-sm text-muted-foreground">Ajuste o tamanho da tipografia.</p>
                  </div>
                  <TypographySettings />
                </TabsContent>
                
                <TabsContent value="spacing" className="mt-0 space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-medium text-lg">Dimensões</h3>
                    <p className="text-sm text-muted-foreground">Controle o espaçamento do layout.</p>
                  </div>
                  <SpacingSettings />
                </TabsContent>

                <TabsContent value="whatsapp" className="mt-0 space-y-6">
                   <div className="space-y-1">
                    <h3 className="font-medium text-lg">Botão Flutuante</h3>
                    <p className="text-sm text-muted-foreground">Configure o contato do WhatsApp.</p>
                  </div>
                  <WhatsappSettings />
                </TabsContent>
              </div>
            </ScrollArea>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}