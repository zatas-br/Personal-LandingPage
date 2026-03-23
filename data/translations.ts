export type Language = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      product: "Produto",
      testimonials: "Depoimentos",
      plans: "Planos",
      contact: "Contato",
    },
    hero: {
      backgroundText: "POTENCIAL",
      projects: "+1000",
      projectsLabel: "Projetos Concluídos",
      titleStart: "Eleve seu",
      titleHighlight: "Potencial",
      button: "Saiba mais",
    },
    about: {
      title: "Sobre Nós",
      description:
        "Somos uma equipe dedicada a criar soluções inovadoras. Com vasta experiência no mercado, desenvolvemos estratégias e ferramentas que impulsionam o sucesso e transcendem os limites convencionais para entregar resultados extraordinários.",
    },
    product: {
      backgroundText: "PRODUTO",
      features: [
        {
          title: "Feature Destaque 1",
          description: "Descrição concisa sobre como esta funcionalidade incrível pode beneficiar o usuário final.",
          highlight: false,
        },
        {
          title: "Feature Destaque 2",
          description: "Descrição concisa sobre como esta funcionalidade incrível pode beneficiar o usuário final.",
          highlight: true,
        },
        {
          title: "Feature Destaque 3",
          description: "Descrição concisa sobre como esta funcionalidade incrível pode beneficiar o usuário final.",
          highlight: false,
        },
      ]
    },
    testimonials: {
      backgroundText: "RESULTADOS",
      titleStart: "Resultados que",
      titleHighlight: "falam por si",
      items: [
        {
          text: "\"A metodologia inovadora transformou completamente minha relação com o trabalho. A plataforma me mantém motivado e os resultados são impressionantes.\"",
        },
        {
          text: "\"Nunca imaginei que alcançaria esses objetivos tão rapidamente. O suporte contínuo e as ferramentas personalizadas fizeram toda a diferença no processo.\"",
        },
        {
          text: "\"O aplicativo é intuitivo e me mantém focado. Os resultados falam por si, e a experiência tem sido fantástica do início ao fim. Recomendo fortemente.\"",
        },
        {
          text: "\"Transformou completamente minha perspectiva. A plataforma é excelente e os resultados superaram todas as minhas expectativas. Simplesmente incrível.\"",
        }
      ]
    },
    absWorkout: {
      backgroundText: "ABS",
      titleStart: "Planilha de Treinos de",
      titleHighlight: "Abs",
      subtitle: "Abdomem Definido: 30 dias para resultados reais",
      features: [
        "Treinos diários",
        "Guia de execução",
        "Foco em queima de gordura",
        "Acesso vitalício"
      ],
      button: "Quero definir meu abdômen"
    },
    pricing: {
      titleStart: "Escolha o plano da",
      titleHighlight: "sua transformação",
      button: "Comprar agora",
      plans: [
        {
          name: "Consultoria online",
          price: "R$48",
          period: "/mês",
          features: [
            "Avaliação Física Completa",
            "Plano de treino personalizado",
            "Acompanhamento via app",
            "Ajustes mensais no programa",
            "Suporte via WhatsApp",
          ],
          highlight: false,
        },
        {
          name: "Acompanhamento premium",
          price: "R$88",
          period: "/mês",
          features: [
            "Tudo do plano anterior",
            "Consultoria nutricional",
            "Videochamadas semanais",
            "Análise postural detalhada",
            "Suporte 24/7",
          ],
          highlight: true,
        },
        {
          name: "Consultoria online",
          price: "R$48",
          period: "/mês",
          features: [
            "Avaliação Física Completa",
            "Plano de treino personalizado",
            "Acompanhamento via app",
            "Ajustes mensais no programa",
            "Suporte via WhatsApp",
          ],
          highlight: false,
        }
      ]
    },
    contact: {
      titleStart: "Pronto para",
      titleHighlight: "Transformar Seu Corpo?",
      description: "Preencha o formulário abaixo para entrarmos em contato ou fale conosco diretamente pelo WhatsApp.",
      form: {
        name: "Seu nome",
        email: "Email",
        phone: "Número (com DDD)",
        submit: "Quero começar agora",
      },
      or: "OU",
      whatsapp: "Falar pelo WhatsApp",
      successMessage: "Mensagem enviada com sucesso! Em breve entraremos em contato."
    },
    footer: {
      copyright: "© 2026 Deusmar Personal Trainer | Todos os direitos reservados.",
      terms: "Termos de Serviço",
      privacy: "Política de Privacidade"
    }
  },
  en: {
    nav: {
      about: "About",
      product: "Product",
      testimonials: "Testimonials",
      plans: "Plans",
      contact: "Contact",
    },
    hero: {
      backgroundText: "POTENTIAL",
      projects: "1000+",
      projectsLabel: "Completed Projects",
      titleStart: "Elevate your",
      titleHighlight: "Potential",
      button: "Learn more",
    },
    about: {
      title: "About Us",
      description:
        "We are a team dedicated to creating innovative solutions. With extensive market experience, we develop strategies and tools that drive success and transcend conventional boundaries to deliver extraordinary results.",
    },
    product: {
      backgroundText: "PRODUCT",
      features: [
        {
          title: "Highlight Feature 1",
          description: "Concise description of how this incredible feature can benefit the end user.",
          highlight: false,
        },
        {
          title: "Highlight Feature 2",
          description: "Concise description of how this incredible feature can benefit the end user.",
          highlight: true,
        },
        {
          title: "Highlight Feature 3",
          description: "Concise description of how this incredible feature can benefit the end user.",
          highlight: false,
        },
      ]
    },
    testimonials: {
      backgroundText: "RESULTS",
      titleStart: "Results that",
      titleHighlight: "speak for themselves",
      items: [
        {
          text: "\"The innovative methodology completely transformed my relationship with work. The platform keeps me motivated and the results are impressive.\"",
        },
        {
          text: "\"I never imagined I would achieve these goals so quickly. Continuous support and personalized tools made all the difference in the process.\"",
        },
        {
          text: "\"The app is intuitive and keeps me focused. The results speak for themselves, and the experience has been fantastic from start to finish. I highly recommend it.\"",
        },
        {
          text: "\"It completely transformed my perspective. The platform is excellent and the results exceeded all my expectations. Simply amazing.\"",
        }
      ]
    },
    absWorkout: {
      backgroundText: "ABS",
      titleStart: "Abs Workout",
      titleHighlight: "Plan",
      subtitle: "Defined Abs: 30 days to real results",
      features: [
        "Daily workouts",
        "Execution guide",
        "Fat burning focus",
        "Lifetime access"
      ],
      button: "I want to define my abs"
    },
    pricing: {
      titleStart: "Choose the plan for",
      titleHighlight: "your transformation",
      button: "Buy now",
      plans: [
        {
          name: "Online Consulting",
          price: "$48",
          period: "/month",
          features: [
            "Complete Physical Assessment",
            "Personalized workout plan",
            "Tracking via app",
            "Monthly program adjustments",
            "WhatsApp support",
          ],
          highlight: false,
        },
        {
          name: "Premium Tracking",
          price: "$88",
          period: "/month",
          features: [
            "Everything from previous plan",
            "Nutritional consulting",
            "Weekly video calls",
            "Detailed postural analysis",
            "24/7 Support",
          ],
          highlight: true,
        },
        {
          name: "Online Consulting",
          price: "$48",
          period: "/month",
          features: [
            "Complete Physical Assessment",
            "Personalized workout plan",
            "Tracking via app",
            "Monthly program adjustments",
            "WhatsApp support",
          ],
          highlight: false,
        }
      ]
    },
    contact: {
      titleStart: "Ready to",
      titleHighlight: "Transform Your Body?",
      description: "Fill out the form below to get in touch with us or contact us directly via WhatsApp.",
      form: {
        name: "Your name",
        email: "Email",
        phone: "Phone number",
        submit: "I want to start now",
      },
      or: "OR",
      whatsapp: "Talk on WhatsApp",
      successMessage: "Message sent successfully! We will contact you soon."
    },
    footer: {
      copyright: "© 2026 Deusmar Personal Trainer | All rights reserved.",
      terms: "Terms of Service",
      privacy: "Privacy Policy"
    }
  }
};
