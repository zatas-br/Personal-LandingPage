"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NotificationBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm relative">
      <div className="flex items-center justify-center gap-2">
        <span className="font-medium">🎉 Oferta Especial:</span>
        <span>50% de desconto nos primeiros 3 meses! Use o código: WELCOME50</span>
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 h-6 w-6 p-0 text-primary-foreground hover:bg-primary-foreground/20"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
