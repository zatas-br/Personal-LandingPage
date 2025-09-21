import React, { useEffect } from 'react';
import './styles.css';

import Header from './components/Header';
import InfoBlocksSection from './components/InfoBlocksSection';
import AppTourSection from './components/AppTourSection';
import ResultsSection from './components/ResultsSection';
import PricingSection from './components/PricingSection';
import CtaFormSection from './components/CtaFormSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Event delegation for smooth scrolling
    const handleSmoothScroll = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []); // Run only once on mount

  useEffect(() => {
    const handleGlowScroll = () => {
      const glowContainer = document.querySelector('.glow-container');
      if (glowContainer) {
        const scrollY = window.scrollY;
        // This will move the glow down as the user scrolls down
        const glowYOffset = scrollY * 0.5; // Adjust multiplier for speed
        glowContainer.style.setProperty('--glow-y-offset', `${glowYOffset}px`);
      }
    };

    window.addEventListener('scroll', handleGlowScroll);

    return () => {
      window.removeEventListener('scroll', handleGlowScroll);
    };
  }, []);

  useEffect(() => {
    // This logic is adapted from the original animations.js file
    const scrollAnimateElements = document.querySelectorAll('.scroll-animate');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a class to trigger the animation
          entry.target.classList.add('fade-in');

          // This part from the original JS is a bit redundant as the trigger
          // is the 'fade-in' class, but we keep it for fidelity.
          if (entry.target.classList.contains('slide-up')) entry.target.classList.add('slide-up');
          if (entry.target.classList.contains('slide-left')) entry.target.classList.add('slide-left');
          if (entry.target.classList.contains('slide-right')) entry.target.classList.add('slide-right');
          if (entry.target.classList.contains('flip-in')) entry.target.classList.add('flip-in');
          if (entry.target.classList.contains('scale-in')) entry.target.classList.add('scale-in');

          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, observerOptions);

    scrollAnimateElements.forEach(el => {
      observer.observe(el);
    });

    // Cleanup observer on component unmount
    return () => {
      scrollAnimateElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <div className="glow-container">
        <Header />
        <InfoBlocksSection />
      </div>
      <main>
        <AppTourSection />
        <ResultsSection />
        <PricingSection />
        <CtaFormSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
