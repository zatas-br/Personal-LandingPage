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
              <span className="subtitle-red">Sua Realidade</span>
            </div>
            <div className="hero-buttons-container">
              <StarBorder as="a" href="#app-tour-section" color="red" speed="4s">
                QUERO SABER MAIS
              </StarBorder>
              <StarBorder as="a" href="#contato-section" color="red" speed="4s">
                ENTRE EM CONTATO
              </StarBorder>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;