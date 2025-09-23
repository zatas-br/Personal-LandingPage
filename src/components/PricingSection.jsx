import React from 'react';

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-primary)"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="check-icon"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const plansData = [
  {
    title: "Consultoria Online",
    price: "R$199/mês",
    features: [
      "App exclusivo com treinos",
      "Ajustes mensais no plano",
      "Suporte via WhatsApp"
    ],
    highlight: false
  },
  {
    title: "Plano Premium",
    price: "R$299/mês",
    features: [
      "Tudo do plano Consultoria",
      "Ajustes quinzenais no plano",
      "Videochamada mensal",
      "Análise postural"
    ],
    highlight: true
  },
  {
    title: "Plano Elite",
    price: "R$499/mês",
    features: [
      "Tudo do plano Premium",
      "Ajustes semanais no plano",
      "Suporte 24/7",
      "Planejamento de metas avançado"
    ],
    highlight: false
  }
];

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <h2 className="scroll-animate slide-up">Escolha o plano da sua transformação</h2>
      <div className="pricing-grid">
        {plansData.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.highlight ? 'highlight' : ''} scroll-animate slide-up delay-${index}`}>
            <h3>{plan.title}</h3>
            <p className="pricing-price">{plan.price}</p>
            <ul className="pricing-features">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex}>
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="cta-button">ESCOLHER PLANO</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
