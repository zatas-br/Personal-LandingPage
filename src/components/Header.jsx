import React from 'react';
import { FiUser, FiSmartphone, FiStar } from 'react-icons/fi'; // Importando ícones
import StarBorder from './StarBorder';
import CardSwap, { Card } from './CardSwap';
import RotatingText from './RotatingText';
import logo from '../assets/logo.png';

const Header = () => {
  const rotatingTexts = [
    "Transforme Seu Corpo e Sua Vida",
    "Com Experiência de 10 Anos",
    "Resultados Garantidos e Motivação"
  ];

  return (
    <header className="hero-section">
      <div className="hero-content">
        <div className="hero-layout">
          <div className="hero-text-content">
  <img src={logo} alt="Deusmar Personal Trainer" className="hero-logo" />
            <div className="subtitle">
              <span>Transforme</span>
              <RotatingText
                texts={['Seu Corpo', 'Sua Vida']}
                mainClassName="rotating-text-background"
                splitBy="words"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
              <StarBorder as="a" href="#app-tour-section" color="red" speed="4s">
                QUERO SABER MAIS
              </StarBorder>
              <StarBorder as="a" href="#contato-section" color="red" speed="4s">
                ENTRE EM CONTATO
              </StarBorder>
            </div>
          </div>
          <div className="hero-card-swap">
            <CardSwap width={600} height={480}>
              <Card><h3><FiUser /> <span>Sobre o Deusmar</span></h3></Card>
              <Card><h3><FiSmartphone /> <span>Sobre o APP</span></h3></Card>
              <Card><h3><FiStar /> <span>Avaliações de outros alunos</span></h3></Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
