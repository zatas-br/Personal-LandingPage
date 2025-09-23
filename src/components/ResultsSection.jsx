import React from 'react';

const testimonialsData = [
  {
    photoUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Juliana Almeida",
    city: "São Paulo",
    result: "-15kg em 4 meses",
    quote: "A metodologia do Deusmar transformou completamente minha relação com o exercício. O app me mantém motivada e os resultados são impressionantes."
  },
  {
    photoUrl: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Ricardo Borges",
    city: "Lisboa",
    result: "+8kg de massa magra",
    quote: "Profissionalismo exemplar e um plano de treino que realmente funciona. O acompanhamento online superou minhas expectativas."
  },
  {
    photoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Fernanda Costa",
    city: "Miami",
    result: "Recuperação pós-parto",
    quote: "Encontrei no Deusmar o suporte que precisava para voltar a treinar com segurança e eficácia. Me sinto mais forte e confiante."
  }
];

const ResultsSection = () => {
  return (
    <section className="results-section">
      <h2 className="scroll-animate slide-up">Resultados que falam por si</h2>
      <div className="results-grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className={`result-card scroll-animate slide-up delay-${index}`}>
            <img src={testimonial.photoUrl} alt={`Foto de ${testimonial.name}`} className="result-photo" />
            <div className="result-card-content">
              <h4>{testimonial.name}</h4>
              <p className="result-city">{testimonial.city}</p>
              <p className="result-highlight">{testimonial.result}</p>
              <p className="result-quote">"{testimonial.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;
