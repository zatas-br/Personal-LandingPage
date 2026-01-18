"use client"

import * as React from "react"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SettingsDialog } from "@/components/settings-dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"

export function AdminControls() {
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const { toast } = useToast()

  React.useEffect(() => {
    setMounted(true)
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Atalho: Shift + S
      if (e.shiftKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault()
        setOpen((prev) => {
          if (!prev) {
             toast({
              title: "Painel Aberto",
              description: "Configurações do template ativadas.",
            })
          }
          return !prev
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toast])

  if (!mounted) return null

  return (
    <>
      <TooltipProvider>
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
           <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => setOpen(true)}
                size="icon"
                className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-primary text-primary-foreground border-2 border-white/10"
              >
                <Settings className="h-6 w-6 animate-spin-slow hover:animate-spin" />
                <span className="sr-only">Configurações (Shift + S)</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="font-medium">
              Personalizar Template <span className="ml-2 text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded border">Shift + S</span>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>

      <SettingsDialog open={open} onOpenChange={setOpen} />
    </>
  )
}