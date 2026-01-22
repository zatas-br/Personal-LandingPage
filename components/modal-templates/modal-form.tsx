"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ModalForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">Fazer Login / Cadastro</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
         <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
               <TabsTrigger value="login">Entrar</TabsTrigger>
               <TabsTrigger value="register">Cadastrar</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
               <DialogHeader>
                  <DialogTitle>Bem-vindo de volta</DialogTitle>
                  <DialogDescription>
                     Entre com seu e-mail e senha para acessar sua conta.
                  </DialogDescription>
               </DialogHeader>
               <div className="space-y-4 py-2">
                  <div className="space-y-2">
                     <Label htmlFor="email">Email</Label>
                     <Input id="email" placeholder="m@example.com" />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="password">Senha</Label>
                     <Input id="password" type="password" />
                  </div>
               </div>
               <DialogFooter>
                  <Button type="submit" className="w-full">Entrar</Button>
               </DialogFooter>
            </TabsContent>

            <TabsContent value="register" className="space-y-4">
               <DialogHeader>
                  <DialogTitle>Criar Conta</DialogTitle>
                  <DialogDescription>
                     Preencha os campos abaixo para começar.
                  </DialogDescription>
               </DialogHeader>
               <div className="space-y-4 py-2">
                   <div className="space-y-2">
                     <Label htmlFor="name">Nome Completo</Label>
                     <Input id="name" />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="new-email">Email</Label>
                     <Input id="new-email" placeholder="m@example.com" />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="new-password">Senha</Label>
                     <Input id="new-password" type="password" />
                  </div>
               </div>
               <DialogFooter>
                  <Button type="submit" className="w-full">Criar Conta</Button>
               </DialogFooter>
            </TabsContent>
         </Tabs>
      </DialogContent>
    </Dialog>
  )
}
