"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AuthForm } from "./auth-shared"
import { Button } from "@/components/ui/button"

export function GlassAuth() {
  const [isLogin, setIsLogin] = React.useState(true)

  return (
    <div className="relative flex min-h-[600px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      {/* Background with abstract shapes */}
      <div className="absolute inset-0 w-full h-full bg-slate-950 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-4 sm:p-6">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 text-white">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              {isLogin ? "Olá Novamente!" : "Junte-se a Nós"}
            </h2>
            <p className="text-white/70">
              {isLogin
                ? "Sentimos sua falta."
                : "Comece sua jornada hoje."}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "register"}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-4">
                 {/* Custom form styling for glass effect */}
                 <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Email</label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                      placeholder="nome@exemplo.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Senha</label>
                    <input
                      type="password"
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                  {!isLogin && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Confirmar Senha</label>
                      <input
                        type="password"
                        className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                      />
                    </div>
                  )}
                  <button
                    className="w-full rounded-lg bg-white py-2.5 font-semibold text-slate-900 shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                  >
                    {isLogin ? "Entrar" : "Criar Conta"}
                  </button>
                </form>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 text-center text-sm">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-white/70 hover:text-white transition-colors hover:underline underline-offset-4"
            >
              {isLogin ? "Não tem uma conta? Cadastre-se" : "Já tem conta? Entre aqui"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
