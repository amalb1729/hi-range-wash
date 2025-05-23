import React from 'react';
import './ContactTeaser.css';

const ContactTeaser = () => {
  return (
    <section className="contact-teaser" id="contact">
      <div className="contact-teaser-content">
        <h2 className="contact-teaser-title">Visit Us Today</h2>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon" role="img" aria-label="Address">📍</span>
            <p>875/3, By-pass Road, Paigana, Mundakayam</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon" role="img" aria-label="Phone">📞</span>
            <p>+91 9645226100</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon" role="img" aria-label="Hours">🕒</span>
            <p>Open: 8 AM – 9 PM | All Days</p>
          </div>
        </div>
        <div className="contact-buttons">
          <a href="tel:+919645226100" className="call-now-btn">Call Us</a>
        </div>
      </div>
    </section>
  );
};

export default ContactTeaser;
