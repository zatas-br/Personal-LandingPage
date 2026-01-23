"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera } from "lucide-react"

export function ProfileSimple() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Configurações</h1>
          <p className="text-muted-foreground">Gerencie seus dados pessoais e preferências.</p>
        </div>

        <div className="flex flex-col items-center sm:flex-row gap-6">
          <div className="relative group cursor-pointer">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="font-semibold text-lg">Carlos Nogueira</h2>
            <p className="text-muted-foreground text-sm">carlos@exemplo.com</p>
            <Button variant="outline" size="sm" className="mt-2">Alterar Foto</Button>
          </div>
        </div>

        <Separator />

        <form className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Informações Básicas</h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="fullname">Nome Completo</Label>
                <Input id="fullname" defaultValue="Carlos Nogueira" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Nome de Usuário</Label>
                <Input id="username" defaultValue="carlos_dev" />
              </div>
              <div className="grid gap-2">
                 <Label htmlFor="bio">Bio</Label>
                 <Input id="bio" defaultValue="Desenvolvedor Full Stack" />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-medium text-lg">Contato</h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="carlos@exemplo.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" type="tel" defaultValue="+55 11 99999-9999" />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button variant="ghost">Cancelar</Button>
            <Button>Salvar Alterações</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
