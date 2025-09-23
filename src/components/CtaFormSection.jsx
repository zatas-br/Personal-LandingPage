import React from 'react';

const CtaFormSection = () => {
  return (
    <section className="cta-form-section" id="contato-section">
      <h2 className="scroll-animate slide-up">Pronto Para Transformar Seu Corpo?</h2>
      <p className="scroll-animate slide-up delay-1">Cadastre-se para ser um dos primeiros a ter acesso ao app e a uma consultoria exclusiva.</p>
      <form className="cta-form scroll-animate slide-up delay-2">
        <input type="text" placeholder="Seu Nome Completo" required />
        <input type="email" placeholder="Seu E-mail" required />
        <input type="tel" placeholder="Seu WhatsApp" required />
        <div className="form-buttons-container">
          <button type="submit" className="cta-button">QUERO COMEÇAR AGORA!</button>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="cta-button whatsapp-button">
            OU FALE NO WHATSAPP
          </a>
        </div>
      </form>
    </section>
  );
};

export default CtaFormSection;
