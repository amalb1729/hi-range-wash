import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2 className="secondary-tagline">Where Freshness Meets Perfection</h2>
        <p className="hero-description">
          Experience premium fabric care with our eco-friendly services. 
          We handle everything from daily laundry to delicate fabrics with utmost care.
        </p>
        <button onClick={scrollToServices} className="learn-more-button">Our Services</button>
      </div>
      <div className="hero-image">
        <div className="image-placeholder">
        <img src="/src/assets/folded.jpg" alt="Clean, Fresh Laundry" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
