"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  title?: string
  subtitle?: string
  contactText?: string
  items?: FaqItem[]
}

export function FaqSection({
  title = "Perguntas Frequentes",
  subtitle = "Encontre respostas para as dúvidas mais comuns sobre nossa plataforma",
  contactText = "Não encontrou a resposta que procurava?",
  items
}: FaqSectionProps) {
  const defaultFaqs = [
    {
      question: "Como funciona o período de teste gratuito?",
      answer:
        "Você tem 14 dias para testar todas as funcionalidades sem compromisso. Não cobramos cartão de crédito durante o teste e você pode cancelar a qualquer momento.",
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer:
        "Sim, você pode cancelar sua assinatura a qualquer momento através do painel de controle. Não há taxas de cancelamento e você continuará tendo acesso até o final do período pago.",
    },
    {
      question: "Vocês oferecem suporte técnico?",
      answer:
        "Oferecemos suporte técnico 24/7 através de chat, email e telefone. Nossa equipe especializada está sempre pronta para ajudar você a resolver qualquer questão.",
    },
    {
      question: "É possível integrar com outras ferramentas?",
      answer:
        "Sim, nossa plataforma se integra com mais de 100 ferramentas populares como Slack, Google Workspace, Microsoft 365, Salesforce e muitas outras através de APIs e webhooks.",
    },
    {
      question: "Meus dados estão seguros?",
      answer:
        "Absolutamente. Utilizamos criptografia de ponta a ponta, certificação SSL, backups automáticos e estamos em conformidade com LGPD e GDPR. Seus dados nunca são compartilhados com terceiros.",
    },
    {
      question: "Posso mudar de plano depois?",
      answer:
        "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente e o valor é ajustado proporcionalmente.",
    },
    {
      question: "Há limite de usuários?",
      answer:
        "Depende do plano escolhido. O plano Starter permite até 5 usuários, o Professional até 25 usuários, e o Enterprise é ilimitado. Você pode adicionar mais usuários conforme necessário.",
    },
    {
      question: "Vocês oferecem treinamento?",
      answer:
        "Sim, oferecemos treinamento completo através de webinars ao vivo, documentação detalhada, vídeos tutoriais e sessões de onboarding personalizadas para equipes.",
    },
    {
      question: "Como funciona o processo de migração?",
      answer:
        "Nossa equipe especializada cuida de toda a migração dos seus dados gratuitamente. O processo é rápido, seguro e não interfere nas suas operações diárias.",
    },
    {
      question: "Posso personalizar a plataforma?",
      answer:
        "Sim, oferecemos várias opções de personalização incluindo branding, campos customizados, workflows personalizados e integrações sob medida para empresas do plano Enterprise.",
    },
  ]

  const faqs = items || defaultFaqs

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-muted/30 rounded-lg px-6 border">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">{contactText}</p>
          <a href="#section-contact" className="text-primary hover:underline font-medium">
            Entre em contato conosco →
          </a>
        </div>
      </div>
    </section>
  )
}
