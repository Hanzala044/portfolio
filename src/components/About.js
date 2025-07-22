import React from 'react';
import './About.css';

const profileImg = require('./profile.jpg'); // Import the image

const About = () => (
  <section className="about-section">
    <div className="about-img-wrapper">
      <img src={profileImg} alt="Mohammed Hanzala" className="about-img" />
    </div>
    <div className="about-content">
      <h2>About Me</h2>
      <p>
        I am a Computer Science Engineering student, currently in my 3rd year. Enthusiastic frontend developer and passionate about learning new skills. I have hands-on experience with HTML, CSS, JavaScript, and Python.
      </p>
    </div>
  </section>
);

export default About; 