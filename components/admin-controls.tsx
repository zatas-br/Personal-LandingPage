"use client"

import { useState, useEffect } from "react"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SettingsDialog } from "@/components/settings-dialog"

export function AdminControls() {
  const [isVisible, setIsVisible] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Verifica se Shift + V foi pressionado
      if (event.shiftKey && (event.key === "V" || event.key === "v")) {
        setIsVisible((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      {isVisible && (
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="fixed bottom-6 left-6 z-50 h-12 w-12 rounded-full shadow-lg p-0 transition-transform hover:scale-110 active:scale-95 animate-in zoom-in duration-300"
          size="icon"
          aria-label="Editar site"
        >
          <Settings className="h-6 w-6" />
        </Button>
      )}

      <SettingsDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  )
}
