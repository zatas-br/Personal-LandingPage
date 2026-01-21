"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AuthFormProps {
  type: "login" | "register"
  onSubmit: (e: React.FormEvent) => void
}

export function AuthForm({ type, onSubmit }: AuthFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="nome@exemplo.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <Input id="password" type="password" required />
      </div>
      {type === "register" && (
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirmar Senha</Label>
          <Input id="confirm-password" type="password" required />
        </div>
      )}
      <Button type="submit" className="w-full">
        {type === "login" ? "Entrar" : "Criar Conta"}
      </Button>
    </form>
  )
}
