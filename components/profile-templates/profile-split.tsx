"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { User, Bell, Lock, Shield, Globe, Monitor } from "lucide-react"

export function ProfileSplit() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-muted/10">

      {/* Left Sidebar Navigation */}
      <aside className="w-full md:w-64 lg:w-80 border-r bg-background p-6 space-y-8 flex-shrink-0">
         <div className="flex items-center gap-3 px-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
               A
            </div>
            <div>
               <h2 className="font-bold text-sm">Minha Conta</h2>
               <p className="text-xs text-muted-foreground">Configurações Gerais</p>
            </div>
         </div>

         <nav className="space-y-1">
            <Button variant="secondary" className="w-full justify-start gap-3 mb-1">
               <User className="h-4 w-4" /> Perfil Público
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 mb-1 text-muted-foreground">
               <Bell className="h-4 w-4" /> Notificações
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 mb-1 text-muted-foreground">
               <Lock className="h-4 w-4" /> Senha e Segurança
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 mb-1 text-muted-foreground">
               <Monitor className="h-4 w-4" /> Aparência
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 mb-1 text-muted-foreground">
               <Shield className="h-4 w-4" /> Privacidade
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 mb-1 text-muted-foreground">
               <Globe className="h-4 w-4" /> Idioma
            </Button>
         </nav>

         <div className="pt-4 border-t">
            <div className="bg-primary/5 rounded-lg p-4">
               <h4 className="font-semibold text-sm mb-1">Plano Pro</h4>
               <p className="text-xs text-muted-foreground mb-3">Seu plano renova em 12 dias.</p>
               <Button size="sm" variant="outline" className="w-full text-xs">Gerenciar Assinatura</Button>
            </div>
         </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
         <div className="max-w-3xl mx-auto space-y-10">

            <div className="space-y-6">
               <div className="flex justify-between items-start">
                  <div>
                     <h1 className="text-2xl font-bold">Perfil Público</h1>
                     <p className="text-muted-foreground">Isso será exibido publicamente no seu perfil.</p>
                  </div>
                  <Button>Salvar</Button>
               </div>

               <div className="flex items-center gap-8 py-4">
                  <Avatar className="h-20 w-20">
                     <AvatarImage src="https://github.com/shadcn.png" />
                     <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                     <div className="flex gap-2">
                        <Button variant="outline" size="sm">Carregar Nova</Button>
                        <Button variant="ghost" size="sm" className="text-destructive">Remover</Button>
                     </div>
                     <p className="text-xs text-muted-foreground">Recomendado: 400x400px. Max 2MB.</p>
                  </div>
               </div>

               <div className="grid gap-6">
                  <div className="grid gap-2">
                     <Label>Nome de Exibição</Label>
                     <Input defaultValue="Carlos Nogueira" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="grid gap-2">
                        <Label>Email Principal</Label>
                        <Input defaultValue="carlos@exemplo.com" disabled />
                        <p className="text-xs text-muted-foreground">Entre em contato com suporte para alterar.</p>
                     </div>
                     <div className="grid gap-2">
                        <Label>Telefone (Opcional)</Label>
                        <Input placeholder="+55" />
                     </div>
                  </div>

                  <div className="grid gap-2">
                     <Label>Bio</Label>
                     <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        Desenvolvedor Full Stack apaixonado por UI/UX.
                     </textarea>
                     <p className="text-xs text-muted-foreground">Breve descrição sobre você.</p>
                  </div>
               </div>
            </div>

            <div className="border-t pt-10 space-y-6">
               <div>
                  <h2 className="text-lg font-semibold">Links Sociais</h2>
                  <p className="text-sm text-muted-foreground">Adicione links para seus perfis sociais.</p>
               </div>
               <div className="grid gap-4">
                  <div className="grid gap-2">
                     <Label>Website</Label>
                     <Input placeholder="https://seu-site.com" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                     <div className="grid gap-2">
                        <Label>Twitter</Label>
                        <Input placeholder="@usuario" />
                     </div>
                     <div className="grid gap-2">
                        <Label>GitHub</Label>
                        <Input placeholder="username" />
                     </div>
                  </div>
               </div>
            </div>

            <div className="border-t pt-10 space-y-6">
               <div>
                  <h2 className="text-lg font-semibold">Visibilidade</h2>
                  <p className="text-sm text-muted-foreground">Controle quem pode ver seu perfil.</p>
               </div>
               <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                     <Label className="text-base">Perfil Público</Label>
                     <p className="text-sm text-muted-foreground">Qualquer pessoa pode ver seu perfil.</p>
                  </div>
                  <Switch defaultChecked />
               </div>
               <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                     <Label className="text-base">Mostrar Email</Label>
                     <p className="text-sm text-muted-foreground">Exibir email de contato no perfil.</p>
                  </div>
                  <Switch />
               </div>
            </div>

         </div>
      </main>
    </div>
  )
}
