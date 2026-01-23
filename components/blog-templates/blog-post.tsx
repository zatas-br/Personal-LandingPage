"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export function BlogPost({ slug }: { slug: string }) {
  // Mock data - in a real app this would come from a CMS or API based on the slug
  const post = {
    title: "As 10 Tendências de Design para 2024",
    subtitle: "Descubra o que vai dominar o mundo do design digital no próximo ano, desde minimalismo até 3D.",
    author: {
      name: "Ana Silva",
      role: "Senior Product Designer",
      avatar: "https://github.com/shadcn.png",
    },
    date: "15 Jan, 2024",
    readTime: "5 min de leitura",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop&q=80",
    content: `
      <p>O mundo do design está em constante evolução. À medida que avançamos para 2024, novas tecnologias e mudanças no comportamento do usuário estão moldando a forma como criamos experiências digitais.</p>

      <h2>1. Bento Grids</h2>
      <p>Inspirado nas lancheiras japonesas, o layout Bento Grid continua ganhando força. É uma maneira organizada e visualmente agradável de apresentar informações complexas em blocos digeríveis. A Apple e o Linear são grandes exemplos dessa tendência.</p>

      <h2>2. Design Espacial e 3D</h2>
      <p>Com o lançamento de dispositivos como o Apple Vision Pro, o design espacial está se tornando mais relevante. Elementos 3D interativos na web não são mais apenas "cool", mas funcionais.</p>

      <blockquote>
        "O design não é apenas o que parece e o que se sente. O design é como funciona." - Steve Jobs
      </blockquote>

      <h2>3. Tipografia Gigante</h2>
      <p>Títulos enormes que ocupam quase toda a tela inicial. A tipografia está assumindo o papel de imagem principal em muitos sites modernos, transmitindo mensagens de forma clara e impactante.</p>

      <h2>4. Micro-interações Avançadas</h2>
      <p>Pequenas animações que respondem ao cursor do mouse ou ao toque tornam a navegação mais viva e intuitiva. Elas fornecem feedback imediato e encantam o usuário.</p>

      <h2>Conclusão</h2>
      <p>Manter-se atualizado com essas tendências é crucial, mas lembre-se: a usabilidade sempre deve vir em primeiro lugar. Use essas tendências para melhorar a experiência do usuário, não para atrapalhá-la.</p>
    `
  }

  return (
    <article className="min-h-screen bg-background pb-20">
      {/* Header Image with Overlay */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" />

        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
          <Button variant="ghost" size="sm" asChild className="mb-6 text-white hover:text-white hover:bg-white/20">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o Blog
            </Link>
          </Button>

          <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90">
            {post.category}
          </Badge>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
            {post.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border-2 border-white/20">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-[1fr_300px] gap-12 pt-12">
        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Author Card */}
          <div className="p-6 border rounded-xl bg-card">
            <h3 className="font-semibold mb-4 text-lg">Sobre o Autor</h3>
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-muted-foreground mb-3">{post.author.role}</p>
                <Button variant="outline" size="sm" className="w-full">Seguir</Button>
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="p-6 border rounded-xl bg-card">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Compartilhar
            </h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="flex-1">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="flex-1">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="flex-1">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Newsletter (Mini) */}
          <div className="p-6 border rounded-xl bg-primary/5">
            <h3 className="font-semibold mb-2">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Receba os melhores artigos diretamente no seu email.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="w-full">Inscrever-se</Button>
            </div>
          </div>
        </aside>
      </div>
    </article>
  )
}
