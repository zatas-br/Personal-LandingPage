"use client"

import { useState } from "react"
import { Monitor, Smartphone, Tablet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function PreviewContainer({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"desktop" | "tablet" | "mobile">("desktop")

  const getWidth = () => {
    switch (mode) {
      case "mobile": return "375px"
      case "tablet": return "768px"
      default: return "100%"
    }
  }

  return (
    <div className="flex flex-col h-full bg-muted/30">
      {/* Toolbar */}
      <div className="flex items-center justify-center gap-2 p-2 border-b bg-background sticky top-0 z-20 shrink-0 shadow-sm">
         <div className="flex items-center bg-muted p-1 rounded-md">
           <Button
             variant="ghost"
             size="sm"
             onClick={() => setMode("desktop")}
             title="Desktop (100%)"
             className={cn("h-8 px-3", mode === "desktop" && "bg-background shadow-sm text-primary")}
           >
             <Monitor className="h-4 w-4" />
           </Button>
           <Button
             variant="ghost"
             size="sm"
             onClick={() => setMode("tablet")}
             title="Tablet (768px)"
             className={cn("h-8 px-3", mode === "tablet" && "bg-background shadow-sm text-primary")}
           >
             <Tablet className="h-4 w-4" />
           </Button>
           <Button
             variant="ghost"
             size="sm"
             onClick={() => setMode("mobile")}
             title="Mobile (375px)"
             className={cn("h-8 px-3", mode === "mobile" && "bg-background shadow-sm text-primary")}
           >
             <Smartphone className="h-4 w-4" />
           </Button>
         </div>
      </div>

      {/* Viewport Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-8 flex justify-center bg-zinc-100 dark:bg-zinc-950/50">
        <div
           className={cn(
             "bg-background shadow-2xl transition-all duration-500 ease-in-out flex flex-col relative mx-auto",
             mode !== "desktop" && "border ring-1 ring-border/10 rounded-sm my-4"
           )}
           style={{
             width: getWidth(),
             minHeight: '100%',
             maxWidth: '100%', // Ensure it doesn't overflow parent
           }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
