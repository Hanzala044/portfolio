import React, { useEffect, useState } from 'react';
import './Projects.css';

const GITHUB_USERNAME = 'Hanzala044';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch projects');
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      {loading && <div className="projects-loading">Loading GitHub projects...</div>}
      {error && <div className="projects-error">{error}</div>}
      <div className="projects-list">
        {repos.map((repo) => (
          <a
            className="project-card"
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{repo.name}</h3>
            <p>{repo.description || 'No description provided.'}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects; 