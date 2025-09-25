import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  Award,
  Users,
  Globe,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">SuaEmpresa</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transformando negócios através de soluções inovadoras e tecnologia de ponta. Mais de 10 anos de
                experiência ajudando empresas a crescer no mundo digital.
              </p>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-lg font-bold">50K+</div>
                <div className="text-xs text-muted-foreground">Clientes</div>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <Globe className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-lg font-bold">25+</div>
                <div className="text-xs text-muted-foreground">Países</div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h5 className="font-medium mb-3">Siga-nos</h5>
              <div className="flex gap-3">
                <div className="p-2 bg-muted/50 rounded-lg hover:bg-primary/10 cursor-pointer transition-colors">
                  <Facebook className="h-4 w-4 text-muted-foreground hover:text-primary" />
                </div>
                <div className="p-2 bg-muted/50 rounded-lg hover:bg-primary/10 cursor-pointer transition-colors">
                  <Instagram className="h-4 w-4 text-muted-foreground hover:text-primary" />
                </div>
                <div className="p-2 bg-muted/50 rounded-lg hover:bg-primary/10 cursor-pointer transition-colors">
                  <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary" />
                </div>
                <div className="p-2 bg-muted/50 rounded-lg hover:bg-primary/10 cursor-pointer transition-colors">
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary" />
                </div>
                <div className="p-2 bg-muted/50 rounded-lg hover:bg-primary/10 cursor-pointer transition-colors">
                  <Youtube className="h-4 w-4 text-muted-foreground hover:text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Serviços</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Consultoria Digital
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Aplicativos Mobile
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Automação de Processos
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cloud Computing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Segurança Digital
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Suporte Técnico 24/7
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#section-about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Imprensa
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Parceiros
                </a>
              </li>
              <li>
                <a href="#section-contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato e Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">(11) 9999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">contato@suaempresa.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    São Paulo, SP
                    <br />
                    Brasil
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Seg-Sex: 8h-18h</span>
                </div>
              </div>
            </div>

            {/* Newsletter Rápida */}
            <div>
              <h5 className="font-medium mb-3">Newsletter</h5>
              <div className="flex gap-2">
                <Input placeholder="Seu email" className="h-9 text-sm" />
                <Button size="sm" className="px-3">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Certificações e Garantias */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-8 h-8 text-primary" />
              <div className="text-sm font-medium">SSL Seguro</div>
              <div className="text-xs text-muted-foreground">Certificado de Segurança</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="w-8 h-8 text-primary" />
              <div className="text-sm font-medium">ISO 27001</div>
              <div className="text-xs text-muted-foreground">Certificação Internacional</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="w-8 h-8 text-primary" />
              <div className="text-sm font-medium">LGPD</div>
              <div className="text-xs text-muted-foreground">Conformidade Total</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-8 h-8 text-primary" />
              <div className="text-sm font-medium">99.9% Uptime</div>
              <div className="text-xs text-muted-foreground">Disponibilidade Garantida</div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright e Links Legais */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 SuaEmpresa. Todos os direitos reservados. | CNPJ: 00.000.000/0001-00
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Política de Cookies
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Política de Reembolso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
