import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Laundry',
      description: 'Clean, crisp, and fresh',
      icon: '🧼',
      bgColor: 'teal'
    },
    {
      id: 2,
      title: 'Steam Ironing',
      description: 'Wrinkle-free elegance',
      icon: '👔',
      bgColor: 'teal'
    },
    {
      id: 3,
      title: 'Drycleaning',
      description: 'For your most delicate wear',
      icon: '🧥',
      bgColor: 'mustard'
    },
    {
      id: 4,
      title: 'Stain Removing',
      description: 'Spotless magic',
      icon: '✨',
      bgColor: 'mustard'
    }
  ];

  const scrollToDetailedService = (serviceId) => {
    const detailedServiceElement = document.getElementById(`detailed-service-${serviceId}`);
    if (detailedServiceElement) {
      detailedServiceElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Add a highlight effect
      detailedServiceElement.classList.add('highlight-service');
      
      // Remove the highlight effect after 2 seconds
      setTimeout(() => {
        detailedServiceElement.classList.remove('highlight-service');
      }, 2000);
    }
  };

  return (
    <section className="services-section" id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map(service => (
          <div 
            key={service.id} 
            className="service-card"
            onClick={() => scrollToDetailedService(service.id)}
          >
            <span className="service-icon" role="img" aria-label={service.title}>
              {service.icon}
            </span>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="learn-more">Learn more</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
