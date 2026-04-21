import React, { useState } from 'react';
import './Projects.css';

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
};

const projects: Project[] = [
  {
    title: 'YourTube',
    description: 'A full-stack video streaming platform inspired by YouTube, featuring video uploads, likes, watch history, and real-time chatrooms with user roles and secure authentication.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Swarnamoyb7890/YourTube',
  },
  {
    title: 'Weather Website',
    description: 'Responsive weather app showing real-time weather updates from public APIs.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    github: 'https://github.com/Swarnamoyb7890/Weather',
  },
  {
    title: 'SoftSell E-commerce Homepage',
    description: 'Modern e-commerce homepage with responsive sections and clean component structure.',
    tech: ['React', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/Swarnamoyb7890/Softsell',
  },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const relativeX = (event.clientX - centerX) / rect.width;
    const relativeY = (event.clientY - centerY) / rect.height;

    const rotateY = relativeX * 10;
    const rotateX = -relativeY * 10;
    const translateX = relativeX * 8;
    const translateY = relativeY * 8;

    card.style.setProperty('--card-rotate-x', `${rotateX}deg`);
    card.style.setProperty('--card-rotate-y', `${rotateY}deg`);
    card.style.setProperty('--card-translate-x', `${translateX}px`);
    card.style.setProperty('--card-translate-y', `${translateY}px`);
  };

  const handleCardMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    card.style.setProperty('--card-rotate-x', '0deg');
    card.style.setProperty('--card-rotate-y', '0deg');
    card.style.setProperty('--card-translate-x', '0px');
    card.style.setProperty('--card-translate-y', '0px');
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section id="projects" className="section section-projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-slider">
          <button type="button" className="project-nav" aria-label="Previous project" onClick={goPrev}>
            ‹
          </button>

          <div className="projects-viewport">
            <div className="projects-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {projects.map((project, index) => (
                <div className="project-slide" key={project.title}>
                  <article
                    className="project-card"
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                    style={{ cursor: index === currentIndex ? 'pointer' : 'default' }}
                  >
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>
                      {project.tech.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        View on GitHub
                      </a>
                    )}
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button type="button" className="project-nav" aria-label="Next project" onClick={goNext}>
            ›
          </button>
        </div>

        <div className="project-dots">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={`project-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
