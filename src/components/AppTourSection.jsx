import React, { useState, useEffect } from 'react';
import imagemProgresso from '../assets/informacoes.jpeg';
import imagemAvaliacoes from '../assets/inicial.jpeg';
import imagemSupervisao from '../assets/postural.jpeg';

const features = [
  {
    title: "Acompanhe seu progresso",
    description: "Insira cargas e repetições a cada treino e veja sua evolução em gráficos detalhados.",
    image: imagemProgresso
  },
  {
    title: "Avaliações sempre com você",
    description: "Faça o download de suas avaliações físicas e posturais diretamente no app.",
    image: imagemAvaliacoes
  },
  {
    title: "Supervisão total",
    description: "Meu acompanhamento contínuo sobre seu desempenho para ajustes precisos no seu plano.",
    image: imagemSupervisao
  }
];

const AppTourSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 5000); // 5 seconds to match the CSS transition

    return () => clearInterval(interval);
  }, []);

  const handleFeatureClick = (index) => {
    setActiveIndex(index);
    // Here you might want to reset the interval, but for simplicity we'll let it continue
  };

  return (
    <section id="app-tour-section" className="app-tour-section">
      <h2 className="scroll-animate fade-in">A revolução do seu treino na palma da mão</h2>

      <div className="app-tour-layout">
        <div className="app-tour-image-container">
          <img
            src={features[activeIndex].image}
            alt={features[activeIndex].title}
            className="video-placeholder-image"
          />
        </div>
        <div className="app-tour-features">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`app-tour-feature-item ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleFeatureClick(index)}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppTourSection;
