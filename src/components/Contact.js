import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact-section">
    <h2>Contact</h2>
    <div className="contact-links">
      <a href="https://github.com/Hanzala044" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="contact-icon" />
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/mohammed-hanzala-0ab14424a/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="contact-icon" />
        LinkedIn
      </a>
      <a href="mailto:mohammedhanzala440@gmail.com">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Gmail" className="contact-icon" />
        Gmail
      </a>
    </div>
  </section>
);

export default Contact; 