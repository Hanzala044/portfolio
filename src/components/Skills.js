import React from 'react';
import './Skills.css';

const frontendSkills = [
  { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
];
const backendSkills = [
  { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
];
const tools = [
  { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
];

const Skills = () => (
  <section className="skills-section">
    <h2>Skills</h2>
    <div className="skills-category">
      <h3>Frontend</h3>
      <div className="skills-list">
        {frontendSkills.map(skill => (
          <div className="skill-card" key={skill.name}>
            <img src={skill.img} alt={skill.name} className="skill-img" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="skills-category">
      <h3>Backend</h3>
      <div className="skills-list">
        {backendSkills.map(skill => (
          <div className="skill-card" key={skill.name}>
            <img src={skill.img} alt={skill.name} className="skill-img" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="skills-category">
      <h3>Tools</h3>
      <div className="skills-list">
        {tools.map(skill => (
          <div className="skill-card" key={skill.name}>
            <img src={skill.img} alt={skill.name} className="skill-img" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills; 