"use client"

import * as React from "react"
import { ArrowUpRight, ArrowRight, Instagram, Linkedin, Twitter, Dribbble } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function AgencyPortfolio() {
  return (
    <div className="flex flex-col min-h-full bg-zinc-950 text-zinc-50 font-sans selection:bg-pink-500 selection:text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 md:p-10">
        <div className="text-2xl font-bold tracking-tighter">AGNCY</div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
           <a href="#" className="hover:text-pink-500 transition-colors">Work</a>
           <a href="#" className="hover:text-pink-500 transition-colors">Services</a>
           <a href="#" className="hover:text-pink-500 transition-colors">About</a>
           <a href="#" className="hover:text-pink-500 transition-colors">Contact</a>
        </div>
        <Button variant="outline" className="rounded-full border-zinc-800 text-white hover:bg-zinc-800 hover:text-white">Let's Talk</Button>
      </nav>

      {/* Hero */}
      <section className="container px-6 md:px-10 py-20 md:py-32">
         <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
               We craft digital <span className="text-pink-500">experiences</span> that people love.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
               A creative agency focusing on branding, product design, and development for ambitious startups.
            </p>
         </div>
         <div className="mt-16 flex gap-4">
            <div className="animate-bounce mt-8">
               <ArrowRight className="w-6 h-6 rotate-90 text-zinc-500" />
            </div>
         </div>
      </section>

      {/* Selected Work */}
      <section className="container px-6 md:px-10 py-20">
         <div className="flex justify-between items-end mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Selected Work (2023-2024)</h2>
            <Button variant="link" className="text-white hover:text-pink-500 p-0 h-auto">View All Projects</Button>
         </div>

         <div className="space-y-20">
            {/* Project 1 */}
            <div className="group cursor-pointer">
               <div className="aspect-video w-full bg-zinc-900 rounded-lg overflow-hidden relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-pink-900/20 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-8 left-8">
                     <Badge className="bg-white text-black hover:bg-zinc-200">Fintech</Badge>
                  </div>
               </div>
               <div className="flex justify-between items-start border-b border-zinc-800 pb-8">
                  <div>
                     <h3 className="text-3xl font-bold mb-2 group-hover:text-pink-500 transition-colors">NeoBank App</h3>
                     <p className="text-zinc-400">UI/UX Design, Mobile Development</p>
                  </div>
                  <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300" />
               </div>
            </div>

            {/* Project 2 */}
             <div className="group cursor-pointer">
               <div className="aspect-video w-full bg-zinc-900 rounded-lg overflow-hidden relative mb-6">
                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-emerald-900/20 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-8 left-8">
                     <Badge className="bg-white text-black hover:bg-zinc-200">E-commerce</Badge>
                  </div>
               </div>
               <div className="flex justify-between items-start border-b border-zinc-800 pb-8">
                  <div>
                     <h3 className="text-3xl font-bold mb-2 group-hover:text-pink-500 transition-colors">Luxe Fashion</h3>
                     <p className="text-zinc-400">Web Design, Shopify Development</p>
                  </div>
                   <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-300" />
               </div>
            </div>
         </div>
      </section>

      {/* Services */}
      <section className="container px-6 md:px-10 py-20 border-t border-zinc-900">
         <div className="grid md:grid-cols-2 gap-12">
            <h2 className="text-4xl font-bold">Our Expertise</h2>
            <div className="space-y-8">
               {[
                  { title: "Brand Identity", desc: "Logo design, visual systems, and brand guidelines." },
                  { title: "Product Design", desc: "User interface, user experience, and prototyping." },
                  { title: "Development", desc: "Frontend, backend, and CMS implementation." },
                  { title: "Motion & 3D", desc: "Animation, 3D modeling, and interactive experiences." }
               ].map((service) => (
                  <div key={service.title} className="group">
                     <h3 className="text-2xl font-bold mb-2 flex items-center gap-4">
                        {service.title}
                        <span className="h-px flex-1 bg-zinc-800 group-hover:bg-pink-500 transition-colors" />
                     </h3>
                     <p className="text-zinc-400">{service.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-zinc-900 py-20">
         <div className="container px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-12 mb-20">
               <div>
                  <h2 className="text-5xl font-bold mb-6">Have an idea?</h2>
                  <Button size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-full text-lg px-8 h-14">
                     Start a Project
                  </Button>
               </div>
               <div className="grid grid-cols-2 gap-8 text-zinc-400">
                  <div className="space-y-4">
                     <h4 className="text-white font-bold">New York</h4>
                     <p>123 Broadway Ave<br />NY 10013</p>
                  </div>
                   <div className="space-y-4">
                     <h4 className="text-white font-bold">London</h4>
                     <p>45 Oxford Street<br />W1D 1BS</p>
                  </div>
               </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800 text-sm text-zinc-500">
               <p>© 2024 AGNCY. All rights reserved.</p>
               <div className="flex gap-6 mt-4 md:mt-0">
                  <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
                  <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
                  <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
                  <Dribbble className="w-5 h-5 hover:text-white cursor-pointer" />
               </div>
            </div>
         </div>
      </footer>
    </div>
  )
}
