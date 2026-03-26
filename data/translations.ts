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
      title: "Um aplicativo único disponível na",
      titleHighlight: "Play Store e Apple Store",
      features: [
        {
          title: "Feature Destaque 1",
          description: "Descrição concisa sobre como esta funcionalidade incrível pode beneficiar o usuário final.",
          highlight: false,
          image: "/img/Tela-Login-DPJ-App.png"
        },
        {
          title: "Feature Destaque 2",
          description: "Descrição concisa sobre como esta funcionalidade incrível pode beneficiar o usuário final.",
          highlight: true,
          image: "/img/academia.png"
        },
        {
          title: "Feature Destaque 3",
          description: "Descrição concisa sobre como esta funcionalidade incrível pode beneficiar o usuário final.",
          highlight: false,
          image: "/img/cliente.png"
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
      subtitle: "Abdômen Definido: 30 dias para resultados reais",
      features: [
        "Treinos diários",
        "Guia de execução",
        "Foco em queima de gordura",
        "Acesso vitalício"
      ],
      mainTitle: "Tenha o abdômen definido!",
      description: "Ideal para quem quer ter um treino bem montado, com progressão de carga e periodização, mas ainda não pode investir em acompanhamento presencial. A planilha é entregue em formato digital e pode ser acessada pelo celular.",
      buttonBuy: "Adquira agora",
      buttonMore: "Saiba mais",
      button: "Quero definir meu abdômen",
      whatsappMessage: "Olá! Gostaria de mais informações sobre a *Planilha de Treinos de Abs - Abdômen Definido*. Tenho interesse em adquirir!"
    },
    stats: {
      eyebrow: "Números que Falam",
      titleStart: "Resultados",
      titleHighlight: "Reais",
      description: "Cada número representa uma história de superação, dedicação e transformação real.",
      completedProjects: "Projetos Concluídos",
      satisfiedClients: "Clientes Satisfeitos",
      yearsExperience: "Anos de Experiência",
      totalStudents: "Alunos Transformados",
      countriesReached: "Países Alcançados",
      kgLost: "kg Perdidos pelos Alunos",
    },
    pricing: {
      titleStart: "Escolha o plano da",
      titleHighlight: "sua transformação",
      button: "Comprar agora",
      whatsappMessageTemplate: "Olá! Tenho interesse no plano *{{planName}}* (Plano {{period}}). Pode me passar mais detalhes?",
      periods: {
        bimestral: "Bimestral",
        semestral: "Semestral",
        anual: "Anual",
      },
      plans: {
        bimestral: [
          {
            name: "LIGHT",
            tag: "100% Online",
            slogan: "Tenha acompanhamento COMIGO de qualquer lugar do mundo.",
            price: "R$ 550,00",
            period: "à vista ou 2x de R$ 275,00",
            features: [
              "Avaliação física e postural por fotos",
              "1 prescrição de treino",
              "Nutrição + ajustes",
              "Suporte via WhatsApp",
            ],
            highlight: false,
          },
          {
            name: "PREMIUM",
            tag: "Mais Escolhido",
            slogan: "Acompanhamento completo, com contato presencial ou videochamada.",
            price: "R$ 650,00",
            period: "à vista ou 2x de R$ 325,00",
            features: [
              "Avaliação física e postural presencial",
              "1 consulta presencial ou videochamada",
              "1 prescrição de treino",
              "Nutrição + ajustes",
              "Suporte via WhatsApp",
            ],
            highlight: true,
          },
          {
            name: "TREINO",
            slogan: "Para quem busca evolução no treino, com contato presencial ou videochamada.",
            price: "R$ 400,00",
            period: "à vista ou 2x de R$ 200,00",
            features: [
              "Avaliação física e postural presencial",
              "1 consulta presencial ou videochamada",
              "1 prescrição de treino",
              "Suporte via WhatsApp",
            ],
            highlight: false,
          }
        ],
        semestral: [
          {
            name: "LIGHT",
            tag: "100% Online",
            slogan: "Tenha acompanhamento COMIGO de qualquer lugar do mundo.",
            price: "R$ 1.499,00",
            period: "ou até 6x de R$ 250,00",
            originalPrice: "R$ 1.650,00",
            features: [
              "Avaliação física e postural por fotos",
              "3 prescrições de treino",
              "Nutrição + ajustes",
              "Suporte via WhatsApp",
            ],
            highlight: false,
          },
          {
            name: "PREMIUM",
            tag: "Mais Escolhido",
            slogan: "Acompanhamento completo, com contato presencial ou videochamada.",
            price: "R$ 1.650,00",
            period: "ou até 6x de R$ 275,00",
            originalPrice: "R$ 1.950,00",
            features: [
              "Avaliação física e postural presencial",
              "3 consultas presenciais ou videochamada",
              "3 prescrições de treino",
              "Nutrição + ajustes",
              "Suporte via WhatsApp",
            ],
            highlight: true,
          },
          {
            name: "TREINO",
            slogan: "Para quem busca evolução no treino, com contato presencial ou videochamada.",
            price: "R$ 999,00",
            period: "ou até 6x de R$ 166,50",
            originalPrice: "R$ 1.200,00",
            features: [
              "Avaliação física e postural presencial",
              "3 consultas presenciais ou videochamada",
              "3 prescrições de treino",
              "Suporte via WhatsApp",
            ],
            highlight: false,
          }
        ],
        anual: [
          {
            name: "LIGHT",
            tag: "100% Online",
            slogan: "Tenha acompanhamento COMIGO de qualquer lugar do mundo.",
            price: "R$ 2.699,00",
            period: "ou até 12x de R$ 225,00",
            originalPrice: "R$ 3.300,00",
            features: [
              "Avaliação física e postural por fotos",
              "6 prescrições de treino",
              "Nutrição + ajustes",
              "Suporte via WhatsApp",
            ],
            highlight: false,
          },
          {
            name: "PREMIUM",
            tag: "Mais Escolhido",
            slogan: "Plano indisponível para o período anual.",
            price: "Indisponível",
            period: "",
            features: [
              "Avaliação física e postural presencial",
              "6 consultas presenciais ou videochamada",
              "6 prescrições de treino",
              "Nutrição + ajustes",
              "Suporte via WhatsApp",
            ],
            highlight: true,
          },
          {
            name: "TREINO",
            slogan: "Plano indisponível para o período anual.",
            price: "Indisponível",
            period: "",
            features: [
              "Avaliação física e postural presencial",
              "6 consultas presenciais ou videochamada",
              "6 prescrições de treino",
              "Suporte via WhatsApp",
            ],
            highlight: false,
          }
        ]
      }
    },
    faq: {
      eyebrow: "Perguntas Frequentes",
      titleStart: "Tire suas",
      titleHighlight: "Dúvidas",
      description: "Respondemos as perguntas mais comuns para você começar com confiança.",
      ctaText: "Ainda tem dúvidas? Fale comigo diretamente.",
      ctaButton: "Entrar em Contato",
      items: [
        {
          question: "Como funciona o acompanhamento online?",
          answer: "O acompanhamento online é feito 100% pelo WhatsApp e por videochamada. Você recebe sua planilha de treino personalizada, acompanhamento nutricional e suporte para tirar dúvidas a qualquer momento. Funciona para qualquer lugar do mundo.",
        },
        {
          question: "Preciso ter experiência na academia para começar?",
          answer: "Não! Os treinos são adaptados ao seu nível, seja iniciante, intermediário ou avançado. O objetivo é sempre a progressão segura e eficiente, respeitando suas limitações e objetivos.",
        },
        {
          question: "Com que frequência recebo novos treinos?",
          answer: "A prescrição de treino varia conforme o plano escolhido — bimestral, semestral ou anual. Em todos os planos há revisões periódicas com ajuste de carga e periodização para garantir evolução contínua.",
        },
        {
          question: "A nutrição está incluída nos planos?",
          answer: "Nos planos Light e Premium, sim! O acompanhamento nutricional com ajustes está incluso. No plano Para Treino, o foco é exclusivamente na prescrição e evolução dos treinos.",
        },
        {
          question: "Quanto tempo leva para ver resultados?",
          answer: "Os primeiros resultados visíveis costumam aparecer entre 3 e 8 semanas, dependendo da consistência, alimentação e sono. Resultados sólidos e duradouros são construídos ao longo de meses de dedicação.",
        },
        {
          question: "Posso treinar em casa ou preciso de academia?",
          answer: "Os treinos podem ser adaptados tanto para academia quanto para treino em casa, com ou sem equipamentos. Basta informar sua situação no início do acompanhamento.",
        },
        {
          question: "Como faço para adquirir a Planilha de Abs?",
          answer: "É só entrar em contato pelo WhatsApp ou pelo formulário de contato nesta página. A entrega é digital e imediata após a confirmação do pagamento.",
        },
        {
          question: "Posso cancelar ou pausar meu plano?",
          answer: "Sim, entre em contato pelo WhatsApp para verificar as condições de cancelamento ou pausa conforme o plano contratado. Buscamos sempre a melhor solução para cada caso.",
        },
      ],
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
      title: "A unique app available on",
      titleHighlight: "Play Store and Apple Store",
      features: [
        {
          title: "Highlight Feature 1",
          description: "Concise description of how this incredible feature can benefit the end user.",
          highlight: false,
          image: "/img/Tela-Login-DPJ-App.png"
        },
        {
          title: "Highlight Feature 2",
          description: "Concise description of how this incredible feature can benefit the end user.",
          highlight: true,
          image: "/img/academia.png"
        },
        {
          title: "Highlight Feature 3",
          description: "Concise description of how this incredible feature can benefit the end user.",
          highlight: false,
          image: "/img/cliente.png"
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
      mainTitle: "Get defined abs!",
      description: "Ideal for those who want a well-structured workout with load progression and periodization, but cannot yet invest in face-to-face follow-up. The spreadsheet is delivered in digital format and can be accessed via mobile.",
      buttonBuy: "Buy now",
      buttonMore: "Learn more",
      button: "I want to define my abs",
      whatsappMessage: "Hello! I would like more information about the *Abs Workout Plan - Defined Abs*. I'm interested in buying it!"
    },
    stats: {
      eyebrow: "Numbers That Speak",
      titleStart: "Real",
      titleHighlight: "Results",
      description: "Each number represents a story of overcoming, dedication, and real transformation.",
      completedProjects: "Completed Projects",
      satisfiedClients: "Satisfied Clients",
      yearsExperience: "Years of Experience",
      totalStudents: "Students Transformed",
      countriesReached: "Countries Reached",
      kgLost: "kg Lost by Students",
    },
    pricing: {
      titleStart: "Choose the plan for",
      titleHighlight: "your transformation",
      button: "Buy now",
      whatsappMessageTemplate: "Hello! I am interested in the *{{planName}}* plan ({{period}} plan). Can you give me more details?",
      periods: {
        bimestral: "Bi-monthly",
        semestral: "Semi-annual",
        anual: "Annual",
      },
      plans: {
        bimestral: [
          {
            name: "LIGHT",
            tag: "100% Online",
            slogan: "Get tracking with ME from anywhere in the world.",
            price: "R$ 550,00",
            period: "cash or 2x of R$ 275,00",
            features: [
              "Physical and postural assessment by photos",
              "1 workout prescription",
              "Nutrition + adjustments",
              "WhatsApp support",
            ],
            highlight: false,
          },
          {
            name: "PREMIUM",
            tag: "Most Chosen",
            slogan: "Complete tracking, with face-to-face contact or video call.",
            price: "R$ 650,00",
            period: "cash or 2x of R$ 325,00",
            features: [
              "Face-to-face physical and postural assessment",
              "1 face-to-face consultation or video call",
              "1 workout prescription",
              "Nutrition + adjustments",
              "WhatsApp support",
            ],
            highlight: true,
          },
          {
            name: "TRAINING",
            slogan: "For those seeking evolution in training, with face-to-face contact or video call.",
            price: "R$ 400,00",
            period: "cash or 2x of R$ 200,00",
            features: [
              "Face-to-face physical and postural assessment",
              "1 face-to-face consultation or video call",
              "1 workout prescription",
              "WhatsApp support",
            ],
            highlight: false,
          }
        ],
        semestral: [
          {
            name: "LIGHT",
            tag: "100% Online",
            slogan: "Get tracking with ME from anywhere in the world.",
            price: "R$ 1.499,00",
            period: "or up to 6x of R$ 250,00",
            originalPrice: "R$ 1.650,00",
            features: [
              "Physical and postural assessment by photos",
              "3 workout prescriptions",
              "Nutrition + adjustments",
              "WhatsApp support",
            ],
            highlight: false,
          },
          {
            name: "PREMIUM",
            tag: "Most Chosen",
            slogan: "Complete tracking, with face-to-face contact or video call.",
            price: "R$ 1.650,00",
            period: "or up to 6x of R$ 275,00",
            originalPrice: "R$ 1.950,00",
            features: [
              "Face-to-face physical and postural assessment",
              "3 face-to-face consultations or video calls",
              "3 workout prescriptions",
              "Nutrition + adjustments",
              "WhatsApp support",
            ],
            highlight: true,
          },
          {
            name: "TRAINING",
            slogan: "For those seeking evolution in training, with face-to-face contact or video call.",
            price: "R$ 999,00",
            period: "or up to 6x of R$ 166,50",
            originalPrice: "R$ 1.200,00",
            features: [
              "Face-to-face physical and postural assessment",
              "3 face-to-face consultations or video calls",
              "3 workout prescriptions",
              "WhatsApp support",
            ],
            highlight: false,
          }
        ],
        anual: [
          {
            name: "LIGHT",
            tag: "100% Online",
            slogan: "Get tracking with ME from anywhere in the world.",
            price: "R$ 2.699,00",
            period: "or up to 12x of R$ 225,00",
            originalPrice: "R$ 3.300,00",
            features: [
              "Physical and postural assessment by photos",
              "6 workout prescriptions",
              "Nutrition + adjustments",
              "WhatsApp support",
            ],
            highlight: false,
          },
          {
            name: "PREMIUM",
            tag: "Most Chosen",
            slogan: "Plan unavailable for annual billing.",
            price: "Unavailable",
            period: "",
            features: [
              "Face-to-face physical and postural assessment",
              "6 face-to-face consultations or video calls",
              "6 workout prescriptions",
              "Nutrition + adjustments",
              "WhatsApp support",
            ],
            highlight: true,
          },
          {
            name: "TRAINING",
            slogan: "Plan unavailable for annual billing.",
            price: "Unavailable",
            period: "",
            features: [
              "Face-to-face physical and postural assessment",
              "6 face-to-face consultations or video calls",
              "6 workout prescriptions",
              "WhatsApp support",
            ],
            highlight: false,
          }
        ]
      }
    },
    faq: {
      eyebrow: "Frequently Asked Questions",
      titleStart: "Clear your",
      titleHighlight: "Doubts",
      description: "We answer the most common questions so you can start with confidence.",
      ctaText: "Still have questions? Talk to me directly.",
      ctaButton: "Get in Touch",
      items: [
        {
          question: "How does online coaching work?",
          answer: "Online coaching is done 100% via WhatsApp and video call. You receive your personalized workout plan, nutritional guidance, and support to answer questions at any time. It works from anywhere in the world.",
        },
        {
          question: "Do I need gym experience to start?",
          answer: "No! Workouts are adapted to your level, whether beginner, intermediate, or advanced. The goal is always safe and efficient progression, respecting your limitations and goals.",
        },
        {
          question: "How often do I receive new workouts?",
          answer: "Workout prescriptions vary by plan — bi-monthly, semi-annual, or annual. All plans include periodic reviews with load adjustments and periodization to ensure continuous progress.",
        },
        {
          question: "Is nutrition included in the plans?",
          answer: "In the Light and Premium plans, yes! Nutritional coaching with adjustments is included. In the Training plan, the focus is exclusively on workout prescription and progression.",
        },
        {
          question: "How long does it take to see results?",
          answer: "The first visible results usually appear between 3 and 8 weeks, depending on consistency, diet, and sleep. Solid, lasting results are built over months of dedication.",
        },
        {
          question: "Can I train at home or do I need a gym?",
          answer: "Workouts can be adapted for both gym and home training, with or without equipment. Just let us know your situation at the start of your coaching.",
        },
        {
          question: "How do I get the Abs Workout Plan?",
          answer: "Just contact us via WhatsApp or the contact form on this page. Delivery is digital and immediate after payment confirmation.",
        },
        {
          question: "Can I cancel or pause my plan?",
          answer: "Yes, contact us via WhatsApp to check the cancellation or pause conditions for your plan. We always seek the best solution for each case.",
        },
      ],
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