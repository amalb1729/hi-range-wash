import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Eco-friendly Products',
      description: 'We use environmentally conscious cleaning agents that are gentle on your clothes and the planet.',
      icon: '🌿'
    },
    {
      id: 2,
      title: 'Quick Turnaround',
      description: 'Get your garments back fresh and clean in record time with our efficient service.',
      icon: '⏱️'
    }
  ];

  return (
    <section className="features-section" id="features">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="features-container">
        {features.map(feature => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">
              <span role="img" aria-label={feature.title}>{feature.icon}</span>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
