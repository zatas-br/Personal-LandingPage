import React from 'react';
import logo from '../assets/logo.png';
import appMockupImage from '../assets/playstoryapp.png';

const InfoBlocksSection = () => {
  return (
    <section className="info-blocks-section">
      <div className="info-block scroll-animate slide-left">
        <h2>Seu Treino na Palma da Mão</h2>
        <p>Acompanhamento completo, treinos personalizados, metas e mais. Tudo o que você precisa para alcançar seus resultados em um só lugar.</p>
        <div className="app-mockup">
          <img src={appMockupImage} alt="Mockup do Aplicativo" className="app-image" />
        </div>
      </div>
      <div className="info-block dedication-block scroll-animate slide-right">
        <img src={logo} alt="Logo" className="logo" style={{ marginBottom: '20px', width: '450px' }} />
        <p>
          Mais que um personal trainer, sou um arquiteto de transformações. Com anos de experiência internacional e uma metodologia baseada em dados precisos, desenvolvo estratégias personalizadas que transcendem os limites convencionais do fitness.
        </p>
        <p>
          Minha filosofia combina ciência, tecnologia e dedicação absoluta para entregar resultados mensuráveis e duradouros, independentemente de onde você esteja no mundo.
        </p>
        <p>
          <strong>Resultados Comprovados e Duradouros:</strong> A estética é consequência de um trabalho bem-feito. Meu foco está em construir um corpo forte, funcional e resiliente. As transformações que você vê são fruto de uma parceria sólida e de um método que respeita sua individualidade, garantindo que os resultados alcançados sejam sustentáveis a longo prazo.
        </p>
        <p>
          <strong>Suporte Contínuo e Personalizado:</strong> Sua jornada é minha prioridade. Ofereço um acompanhamento próximo e constante, garantindo que você tenha o suporte necessário para superar desafios e se manter motivado. Estou sempre disponível para tirar dúvidas, ajustar seu plano e celebrar cada conquista ao seu lado.
        </p>
        <div className="stats-container">
          <div className="stat-item">
            <h3>200+</h3>
            <p>transformações</p>
          </div>
          <div className="stat-item">
            <h3>7+</h3>
            <p>países atendidos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBlocksSection;
