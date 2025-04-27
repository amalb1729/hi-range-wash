import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const services = [
    {
      id: 1,
      title: 'Laundry',
      description: 'Clean, crisp, and fresh',
      detailedDescription: 'Our premium laundry service ensures your everyday clothes are washed, dried, and folded to perfection. We use high-quality detergents that are gentle on fabrics while providing a thorough clean.',
      icon: '🧼',
      benefits: ['Preserves fabric quality', 'Removes tough stains', 'Maintains color brightness']
    },
    {
      id: 2,
      title: 'Steam Ironing',
      description: 'Wrinkle-free elegance',
      detailedDescription: 'Our steam ironing service removes even the most stubborn wrinkles, leaving your garments looking crisp and professional. Perfect for business attire, formal wear, and delicate fabrics.',
      icon: '👔',
      benefits: ['Professional finish', 'Gentle on delicate fabrics', 'Preserves garment structure']
    },
    {
      id: 3,
      title: 'Drycleaning',
      description: 'For your most delicate wear',
      detailedDescription: 'For your most delicate wear – we ensure your garments stay pristine and ready to wear. Our drycleaning process is perfect for suits, dresses, silk, wool, and other fabrics that require special care.',
      icon: '🧥',
      benefits: ['Ideal for delicate fabrics', 'Preserves garment structure', 'Extends clothing lifespan']
    },
    {
      id: 4,
      title: 'Stain Removing',
      description: 'Spotless magic',
      detailedDescription: 'Our stain removal experts can tackle even the most challenging stains, from red wine and coffee to ink and grass. We use specialized techniques and products to ensure your garments look spotless.',
      icon: '✨',
      benefits: ['Targets tough stains', 'Preserves fabric integrity', 'Specialized treatment for each stain type']
    }
  ];

  return (
    <section className="about-section-container" id="about">
      <div className="about-story">
        <h2>Our Story</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              At Hi-Range Wash, we believe in delivering perfection with every fabric we touch. 
              Our eco-friendly approach ensures your clothes are cared for sustainably while 
              maintaining the highest standards of cleanliness.
            </p>
            <p>
              Founded with a passion for fabric care and a commitment to excellence, 
              Hi-Range Wash has grown to become a trusted name in premium laundry and 
              drycleaning services. Our journey began with a simple mission: to provide 
              exceptional fabric care that extends the life of your garments while being 
              mindful of our environmental impact.
            </p>
          </div>
        </div>
      </div>
      
      <div className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality</h3>
            <p>
              We never compromise on the quality of our service. Each garment receives 
              the attention it deserves to ensure it returns to you in perfect condition.
            </p>
          </div>
          <div className="value-card">
            <h3>Sustainability</h3>
            <p>
              Our eco-friendly products and processes are designed to minimize our 
              environmental footprint while delivering exceptional results.
            </p>
          </div>
          <div className="value-card">
            <h3>Reliability</h3>
            <p>
              We understand the importance of timely service. Our quick turnaround and 
              dependable service ensure your convenience.
            </p>
          </div>
          <div className="value-card">
            <h3>Customer Care</h3>
            <p>
              Your satisfaction is our priority. We strive to exceed your expectations 
              with every interaction and every service we provide.
            </p>
          </div>
        </div>
      </div>
      
      <div className="detailed-services">
        <h2>Our Services in Detail</h2>
        {services.map(service => (
          <div 
            key={service.id} 
            id={`detailed-service-${service.id}`}
            className="detailed-service-card"
          >
            <div className="service-header">
              <span className="service-icon" role="img" aria-label={service.title}>
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p className="service-tagline">{service.description}</p>
            </div>
            
            <div className="service-body">
              <p className="service-detailed-description">{service.detailedDescription}</p>
              
              <div className="service-benefits">
                <h4>Benefits</h4>
                <ul>
                  {service.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
