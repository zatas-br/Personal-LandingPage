"use client"

import * as React from "react"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ModalPromo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="gap-2">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            Ver Oferta Especial
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
         <div className="grid md:grid-cols-2">
            <div className="bg-primary h-full min-h-[200px] flex items-center justify-center p-6 text-primary-foreground">
               <div className="text-center space-y-2">
                  <div className="text-5xl font-bold">50%</div>
                  <div className="text-2xl font-bold uppercase tracking-widest">OFF</div>
                  <p className="text-sm opacity-90">Em todos os planos anuais</p>
               </div>
            </div>
            <div className="p-6 flex flex-col justify-center space-y-4">
               <DialogHeader>
                  <DialogTitle className="text-2xl">Black Friday Antecipada!</DialogTitle>
                  <DialogDescription>
                     Aproveite nossa oferta por tempo limitado. O desconto é aplicado automaticamente no checkout.
                  </DialogDescription>
               </DialogHeader>
               <div className="bg-muted p-3 rounded-lg text-center font-mono text-sm tracking-widest border border-dashed border-primary">
                  PROMO50
               </div>
               <Button className="w-full">Resgatar Cupom</Button>
               <p className="text-xs text-center text-muted-foreground">Válido até 24/11. Termos se aplicam.</p>
            </div>
         </div>
      </DialogContent>
    </Dialog>
  )
}
