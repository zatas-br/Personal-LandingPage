"use client"

import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const featuredPost = {
  slug: "ia-generativa-futuro",
  title: "O Impacto da IA Generativa no Desenvolvimento de Software Moderno",
  excerpt: "Como ferramentas como Copilot e GPT-4 estão redefinindo a produtividade e o papel dos desenvolvedores na próxima década.",
  author: "Pedro Santos",
  date: "16 Jan, 2024",
  readTime: "8 min",
  category: "Inteligência Artificial",
  image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop&q=80"
}

const recentPosts = [
  {
    id: 1,
    title: "WebAssembly: O que esperar em 2024",
    category: "Tecnologia",
    date: "15 Jan",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Design Systems Escalonáveis",
    category: "Design",
    date: "14 Jan",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Otimizando Core Web Vitals",
    category: "SEO",
    date: "12 Jan",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Arquitetura Hexagonal com Node.js",
    category: "Backend",
    date: "10 Jan",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=60"
  }
]

export function BlogMagazine() {
  return (
    <div className="container mx-auto px-4 py-12">

      {/* Featured Header */}
      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-muted/20 rounded-2xl overflow-hidden p-6 lg:p-10">
           <div className="order-2 lg:order-1 space-y-6">
             <div className="flex items-center gap-3">
               <Badge className="text-sm py-1 px-3">{featuredPost.category}</Badge>
               <span className="text-muted-foreground text-sm flex items-center gap-1">
                 <Clock className="h-3 w-3" /> {featuredPost.readTime}
               </span>
             </div>
             <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
               <Link href="#" className="hover:text-primary transition-colors">
                 {featuredPost.title}
               </Link>
             </h1>
             <p className="text-lg text-muted-foreground leading-relaxed">
               {featuredPost.excerpt}
             </p>
             <div className="flex items-center justify-between pt-4">
               <div className="flex items-center gap-3">
                 <div className="h-10 w-10 rounded-full bg-primary/20" />
                 <div>
                   <p className="font-semibold text-sm">{featuredPost.author}</p>
                   <p className="text-xs text-muted-foreground">{featuredPost.date}</p>
                 </div>
               </div>
               <Button asChild>
                 <Link href="#">Ler Agora <ArrowRight className="ml-2 h-4 w-4" /></Link>
               </Button>
             </div>
           </div>
           <div className="order-1 lg:order-2 aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
             <img src={featuredPost.image} alt="Featured" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
           </div>
        </div>
      </section>

      {/* Editor's Picks & Latest */}
      <div className="grid lg:grid-cols-3 gap-12">

        {/* Latest List */}
        <div className="lg:col-span-2 space-y-10">
          <div className="flex items-center justify-between border-b pb-4 mb-6">
            <h2 className="text-2xl font-bold">Últimas Publicações</h2>
            <Link href="#" className="text-sm text-primary hover:underline">Ver todas</Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-muted">
                   <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span className="text-primary font-medium">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Banner */}
          <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center my-8">
            <h3 className="text-2xl font-bold mb-2">Fique por dentro</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
              Receba as melhores notícias e tutoriais diretamente na sua caixa de entrada semanalmente.
            </p>
            <div className="flex max-w-sm mx-auto gap-2">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none"
              />
              <Button variant="secondary">Assinar</Button>
            </div>
          </div>
        </div>

        {/* Sidebar / Trending */}
        <div className="space-y-8">
          <div className="border-b pb-4 mb-6">
            <h2 className="text-2xl font-bold">Em Alta 🔥</h2>
          </div>

          <div className="flex flex-col gap-6">
             {[1,2,3,4,5].map((i) => (
               <div key={i} className="flex items-start gap-4 group cursor-pointer border-b border-border/40 pb-4 last:border-0">
                 <span className="text-3xl font-bold text-muted-foreground/30 group-hover:text-primary/50 transition-colors">0{i}</span>
                 <div>
                   <span className="text-xs font-medium text-primary mb-1 block">Carreira</span>
                   <h4 className="font-semibold group-hover:text-primary transition-colors">
                     Como negociar seu salário como desenvolvedor sênior em 2024
                   </h4>
                 </div>
               </div>
             ))}
          </div>
        </div>

      </div>
    </div>
  )
}
