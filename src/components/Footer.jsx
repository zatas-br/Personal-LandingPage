import React from 'react';
import logo from '../assets/logo.png'; // Import the logo

// SVG Icon Components
const InstagramIcon = () => (
  <svg className="social-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg className="social-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="social-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-logo-container">
          <img src={logo} alt="Deusmar Personal Trainer Logo" className="footer-logo" />
        </div>
        <div className="footer-social-icons">
          <a href="#" className="social-link instagram" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" className="social-link facebook" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="#" className="social-link whatsapp" aria-label="WhatsApp">
            <WhatsAppIcon />
          </a>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>&copy; 2024 Deusmar Personal Trainer | Todos os direitos reservados. | <a href="#">Política de Privacidade</a></p>
      </div>
    </footer>
  );
};

export default Footer;
