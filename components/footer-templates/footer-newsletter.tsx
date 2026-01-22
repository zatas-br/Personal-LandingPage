"use client"

import * as React from "react"
import { Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FooterNewsletter() {
  return (
    <footer className="w-full border-t bg-zinc-950 text-zinc-50 py-12 md:py-16">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
         <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Stay in the loop
         </h2>
         <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl mb-8">
            Join our newsletter to get the latest updates, news, and exclusive offers delivered straight to your inbox.
         </p>
         <div className="w-full max-w-md flex gap-2 mb-12">
            <Input type="email" placeholder="Enter your email" className="bg-zinc-900 border-zinc-800 text-white" />
            <Button>Subscribe</Button>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl border-t border-zinc-800 pt-12 text-left">
             <div className="space-y-4">
                <a className="flex items-center gap-2 font-bold text-xl" href="#">
                  <Mountain className="h-6 w-6" />
                  <span>Acme Inc</span>
                </a>
             </div>
             <div className="space-y-4">
                <h3 className="font-bold">Platform</h3>
                <div className="flex flex-col gap-2 text-sm text-zinc-400">
                   <a href="#" className="hover:text-white">Features</a>
                   <a href="#" className="hover:text-white">Integrations</a>
                </div>
             </div>
             <div className="space-y-4">
                <h3 className="font-bold">Company</h3>
                <div className="flex flex-col gap-2 text-sm text-zinc-400">
                   <a href="#" className="hover:text-white">About</a>
                   <a href="#" className="hover:text-white">Careers</a>
                </div>
             </div>
             <div className="space-y-4">
                <h3 className="font-bold">Legal</h3>
                 <div className="flex flex-col gap-2 text-sm text-zinc-400">
                   <a href="#" className="hover:text-white">Privacy</a>
                   <a href="#" className="hover:text-white">Terms</a>
                </div>
             </div>
         </div>

         <div className="w-full max-w-4xl mt-12 pt-8 border-t border-zinc-800 text-sm text-zinc-500 flex justify-between">
             <p>© 2024 Acme Inc.</p>
             <p>Designed in California</p>
         </div>
      </div>
    </footer>
  )
}
