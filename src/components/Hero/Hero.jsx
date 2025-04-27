import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2 className="secondary-tagline">Where Freshness Meets Perfection</h2>
        <p className="hero-description">
          Experience premium fabric care with our eco-friendly services. 
          We handle everything from daily laundry to delicate fabrics with utmost care.
        </p>
        <a href="#services" className="learn-more-button">Our Services</a>
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
