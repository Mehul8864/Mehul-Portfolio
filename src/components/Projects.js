import React, { useState } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'EduFlux',
      category: 'fullstack',
      duration: 'Jun 2025 – Aug 2025',
      description: 'A responsive, production-ready ed-tech platform used by 35+ users to author, consume, and review learning content, with secure authentication and role-based access control.',
      keyFeatures: [
        'Role-based access control for students, instructors & admins',
        'Razorpay integration for course payments & instructor payouts',
        'Instructor analytics dashboards — 40% increase in engagement',
        'Cloudinary-powered media uploads for course content',
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Cloudinary', 'Razorpay'],
      color: '#667eea',
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
      links: { github: 'https://github.com/Mehul8864/EduFlux' },
      icon: '🎓',
    },
    {
      title: 'BuddyHub',
      category: 'fullstack',
      duration: 'Oct 2025 – Dec 2025',
      description: 'A low-latency real-time messaging platform enabling instant user interactions and live presence, with optimized connection handling and JWT-based security.',
      keyFeatures: [
        'Real-time messaging with Socket.io — 30% faster connection times',
        'Live user presence indicators',
        'JWT-based auth — reduced unauthorized access by ~40%',
        'Cloudinary for profile image uploads',
      ],
      technologies: ['Next.js', 'Socket.io', 'Node.js', 'Cloudinary', 'JWT', 'Chakra UI', 'MongoDB'],
      color: '#4facfe',
      gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
      links: { github: 'https://github.com/Mehul8864/BuddyHub' },
      icon: '💬',
    },
    {
      title: 'ModuTech',
      category: 'fullstack',
      duration: 'Mar 2025 – May 2025',
      description: 'An e-commerce platform with a performant data pipeline using Firebase & MongoDB, decreasing page load times by 40% and lifting user engagement by 25%.',
      keyFeatures: [
        'Stripe API integration for secure payments',
        'Redux — reduced data-flow complexity by ~50%',
        'Firebase auth with email & Google sign-in',
        'Optimized product search — 40% faster page loads',
      ],
      technologies: ['React', 'Redux', 'Firebase', 'MongoDB', 'Node.js', 'Express', 'Stripe API'],
      color: '#f093fb',
      gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
      links: { github: 'https://github.com/Mehul8864/ModuTech' },
      icon: '🛒',
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
  ];

  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="project-filters">
          {filters.map(f => (
            <button key={f.key} className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`} onClick={() => setActiveFilter(f.key)}>
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, index) => (
            <div className="project-card" key={index} style={{ '--color': project.color, '--grad': project.gradient, '--i': index }}>
              <div className="project-top">
                <div className="project-icon-wrap">
                  <span className="project-emoji">{project.icon}</span>
                </div>
                <div className="project-links-top">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="icon-link" title="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="icon-link" title="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="duration"><i className="far fa-calendar-alt"></i> {project.duration}</span>
                </div>
                <p className="project-description">{project.description}</p>

                <div className="key-features">
                  <h4>Key Features</h4>
                  <ul>
                    {project.keyFeatures.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>

                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
                </div>
              </div>

              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-cta">
                View on GitHub <i className="fab fa-github"></i>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => document.getElementById('coding-profiles').scrollIntoView({ behavior: 'smooth' })} role="button" tabIndex={0}>
        <div className="mouse"><div className="wheel"></div></div>
        <div className="arrow"><span></span><span></span><span></span></div>
      </div>
    </section>
  );
}

export default Projects;
