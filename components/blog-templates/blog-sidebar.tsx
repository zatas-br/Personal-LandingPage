"use client"

import Link from "next/link"
import { Search, Calendar, Tag, ChevronRight, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const posts = [
  {
    id: 1,
    slug: "tendencias-design-2024",
    title: "As 10 Tendências de Design para 2024",
    excerpt: "Descubra o que vai dominar o mundo do design digital no próximo ano, desde minimalismo até 3D.",
    author: "Ana Silva",
    date: "15 Jan, 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    slug: "guia-react-server-components",
    title: "Guia Completo de React Server Components",
    excerpt: "Tudo o que você precisa saber sobre a nova arquitetura do React e como ela melhora a performance.",
    author: "Carlos Oliveira",
    date: "12 Jan, 2024",
    category: "Desenvolvimento",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    slug: "marketing-digital-estrategias",
    title: "Estratégias de Marketing Digital para Startups",
    excerpt: "Como crescer sua startup gastando pouco com táticas comprovadas de growth hacking.",
    author: "Mariana Costa",
    date: "10 Jan, 2024",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
  },
]

const categories = ["Design", "Desenvolvimento", "Marketing", "Tecnologia", "Negócios", "Carreira"]
const tags = ["React", "Next.js", "UI/UX", "SEO", "Startup", "CSS", "Frontend", "Backend"]

export function BlogSidebar() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-[1fr_320px] gap-12">

        {/* Main Content */}
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col gap-4 group">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                 <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Badge variant="secondary" className="font-normal">{post.category}</Badge>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span>{post.author}</span>
                 </div>
                 <h2 className="text-3xl font-bold group-hover:text-primary transition-colors">
                   <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                 </h2>
                 <p className="text-muted-foreground text-lg leading-relaxed">
                   {post.excerpt}
                 </p>
                 <Button variant="link" className="px-0 text-primary font-semibold" asChild>
                   <Link href={`/blog/${post.slug}`}>
                     Ler artigo completo <ChevronRight className="ml-1 h-4 w-4" />
                   </Link>
                 </Button>
              </div>
            </article>
          ))}

          {/* Pagination Mock */}
          <div className="flex justify-center pt-8">
             <Button variant="outline" className="mr-2">Anterior</Button>
             <Button variant="outline">Próxima</Button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8 h-fit sticky top-8">
           {/* Search */}
           <Card className="shadow-none border bg-muted/20">
             <CardContent className="p-4">
               <div className="relative">
                 <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                 <Input type="search" placeholder="Buscar..." className="pl-8 bg-background" />
               </div>
             </CardContent>
           </Card>

           {/* Categories */}
           <div className="space-y-4">
             <h3 className="font-bold text-lg flex items-center gap-2">
               <ChevronRight className="h-4 w-4 text-primary" /> Categorias
             </h3>
             <ul className="space-y-2">
               {categories.map((cat) => (
                 <li key={cat}>
                   <Link href="#" className="flex justify-between items-center text-muted-foreground hover:text-primary transition-colors py-1 border-b border-border/50">
                     <span>{cat}</span>
                     <span className="text-xs bg-muted px-2 py-0.5 rounded-full">{(Math.random() * 20).toFixed(0)}</span>
                   </Link>
                 </li>
               ))}
             </ul>
           </div>

           {/* Popular Posts */}
           <div className="space-y-4">
             <h3 className="font-bold text-lg flex items-center gap-2">
               <TrendingUp className="h-4 w-4 text-primary" /> Populares
             </h3>
             <div className="space-y-4">
               {posts.map((post) => (
                 <div key={post.id} className="flex gap-4 group cursor-pointer">
                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 bg-muted">
                       <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                      <span className="text-xs text-muted-foreground mt-1 block">{post.date}</span>
                    </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Tags */}
           <div className="space-y-4">
             <h3 className="font-bold text-lg flex items-center gap-2">
               <Tag className="h-4 w-4 text-primary" /> Tags
             </h3>
             <div className="flex flex-wrap gap-2">
               {tags.map((tag) => (
                 <Badge key={tag} variant="secondary" className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                   {tag}
                 </Badge>
               ))}
             </div>
           </div>
        </aside>

      </div>
    </div>
  )
}
