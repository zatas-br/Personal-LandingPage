"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Check, ChevronRight, ShoppingBag, CreditCard, CheckCircle2 } from "lucide-react"

export function CheckoutMultistep() {
  const [step, setStep] = useState(1)

  const steps = [
    { number: 1, title: "Identificação", icon: ShoppingBag },
    { number: 2, title: "Pagamento", icon: CreditCard },
    { number: 3, title: "Confirmação", icon: CheckCircle2 },
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">

      {/* Steps Indicator */}
      <div className="flex justify-between items-center mb-12 relative max-w-2xl mx-auto">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted -z-10 -translate-y-1/2" />
        {steps.map((s) => (
          <div key={s.number} className="flex flex-col items-center gap-2 bg-background px-4">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                step >= s.number ? "bg-primary border-primary text-primary-foreground" : "bg-background border-muted text-muted-foreground"
              }`}
            >
              <s.icon className="h-5 w-5" />
            </div>
            <span className={`text-xs font-medium ${step >= s.number ? "text-primary" : "text-muted-foreground"}`}>
              {s.title}
            </span>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_350px] gap-12">
        {/* Main Form Area */}
        <div className="space-y-8">
           {step === 1 && (
             <div className="animate-fade-in-up">
               <h2 className="text-2xl font-bold mb-6">Dados Pessoais</h2>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <Label>Nome</Label>
                   <Input placeholder="Seu nome" />
                 </div>
                 <div className="space-y-2">
                   <Label>Sobrenome</Label>
                   <Input placeholder="Seu sobrenome" />
                 </div>
                 <div className="space-y-2 md:col-span-2">
                   <Label>Email</Label>
                   <Input type="email" placeholder="seu@email.com" />
                 </div>
                 <div className="space-y-2 md:col-span-2">
                   <Label>Endereço</Label>
                   <Input placeholder="Rua, Número, Bairro" />
                 </div>
                 <div className="space-y-2">
                   <Label>Cidade</Label>
                   <Input placeholder="São Paulo" />
                 </div>
                 <div className="space-y-2">
                   <Label>CEP</Label>
                   <Input placeholder="00000-000" />
                 </div>
               </div>
               <div className="mt-8 flex justify-end">
                 <Button onClick={() => setStep(2)}>
                   Ir para Pagamento <ChevronRight className="ml-2 h-4 w-4" />
                 </Button>
               </div>
             </div>
           )}

           {step === 2 && (
             <div className="animate-fade-in-up">
               <h2 className="text-2xl font-bold mb-6">Método de Pagamento</h2>

               <div className="space-y-6">
                 <Card className="border-primary bg-primary/5 cursor-pointer">
                   <CardContent className="flex items-center gap-4 p-4">
                     <div className="h-4 w-4 rounded-full border border-primary bg-primary" />
                     <div className="flex-1">
                       <p className="font-semibold">Cartão de Crédito</p>
                       <p className="text-sm text-muted-foreground">Mastercard final 4242</p>
                     </div>
                     <CreditCard className="h-5 w-5 text-primary" />
                   </CardContent>
                 </Card>

                 <Card className="cursor-pointer hover:border-primary/50 transition-colors">
                   <CardContent className="flex items-center gap-4 p-4">
                     <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                     <div className="flex-1">
                       <p className="font-semibold">PIX</p>
                       <p className="text-sm text-muted-foreground">Aprovação imediata</p>
                     </div>
                   </CardContent>
                 </Card>

                 <div className="grid md:grid-cols-2 gap-6 pt-4 border-t">
                   <div className="space-y-2 md:col-span-2">
                     <Label>Número do Cartão</Label>
                     <Input placeholder="0000 0000 0000 0000" />
                   </div>
                   <div className="space-y-2">
                     <Label>Validade</Label>
                     <Input placeholder="MM/AA" />
                   </div>
                   <div className="space-y-2">
                     <Label>CVC</Label>
                     <Input placeholder="123" />
                   </div>
                 </div>
               </div>

               <div className="mt-8 flex justify-between">
                 <Button variant="outline" onClick={() => setStep(1)}>Voltar</Button>
                 <Button onClick={() => setStep(3)}>
                   Finalizar Compra <ChevronRight className="ml-2 h-4 w-4" />
                 </Button>
               </div>
             </div>
           )}

           {step === 3 && (
             <div className="animate-fade-in-up text-center py-12 space-y-6">
               <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Check className="h-10 w-10" />
               </div>
               <h2 className="text-3xl font-bold text-green-700">Pedido Confirmado!</h2>
               <p className="text-muted-foreground max-w-md mx-auto">
                 Obrigado pela sua compra. Você receberá um email com os detalhes do seu pedido e instruções de acesso em instantes.
               </p>
               <div className="pt-6">
                 <Button size="lg" onClick={() => setStep(1)}>Voltar ao Início</Button>
               </div>
             </div>
           )}
        </div>

        {/* Sidebar Summary */}
        <div className="space-y-6">
          <Card className="bg-muted/30">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold text-lg">Resumo do Pedido</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plano Pro (Anual)</span>
                  <span className="font-medium">R$ 990,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxas</span>
                  <span className="font-medium">R$ 0,00</span>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>R$ 990,00</span>
              </div>
              <div className="pt-4 space-y-3">
                 <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3 w-3 text-green-600" />
                    <span>Garantia de 30 dias</span>
                 </div>
                 <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3 w-3 text-green-600" />
                    <span>Pagamento seguro SSL</span>
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}
