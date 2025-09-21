import React, { useState } from 'react';

const faqData = [
  {
    question: "Como funciona a consultoria online?",
    answer: "Após a compra, você receberá um questionário detalhado para eu entender seus objetivos, rotina e histórico. Com base nisso, montarei um plano de treino 100% personalizado, entregue através do nosso app exclusivo."
  },
  {
    question: "Preciso de equipamentos de academia?",
    answer: "Não necessariamente. Os treinos são adaptados aos equipamentos que você tem disponíveis, seja em uma academia completa, em casa com halteres e elásticos, ou até mesmo apenas com o peso do corpo."
  },
  {
    question: "Como tiro minhas dúvidas durante o plano?",
    answer: "O suporte é um dos nossos pilares. Dependendo do seu plano, você pode tirar dúvidas via WhatsApp, com respostas em até 24h, ou até mesmo em nossas videochamadas de acompanhamento."
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "Os resultados variam de pessoa para pessoa, mas com consistência e seguindo o plano, a maioria dos alunos começa a notar diferenças significativas de força e disposição nas primeiras 4 semanas."
  }
];

const FaqItem = ({ faq, index, isOpen, toggleFaq }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => toggleFaq(index)}>
      <div className="faq-question">
        <h4>{faq.question}</h4>
        <span className="faq-icon">{isOpen ? '-' : '+'}</span>
      </div>
      <div className="faq-answer">
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="scroll-animate fade-in">Perguntas Frequentes</h2>
      <div className="faq-container scroll-animate slide-up">
        {faqData.map((faq, index) => (
          <FaqItem
            key={index}
            faq={faq}
            index={index}
            isOpen={openFaq === index}
            toggleFaq={toggleFaq}
          />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
