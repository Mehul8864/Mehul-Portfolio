import React, { useState } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'EduFlux',
      category: 'fullstack',
      duration: '2024',
      description: 'An ed-tech platform with secure authentication, role-based access control, course payments, and instructor dashboards. Used by 35+ users to create, consume, and review learning content.',
      keyFeatures: [
        'Role-based access control for students, instructors & admins',
        'Course payments integrated with Razorpay',
        'Cloudinary-powered media uploads for course content',
        'Instructor dashboards with analytics',
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
      duration: '2024',
      description: 'A real-time communication app built for instant messaging and live presence, with optimized connection handling and JWT-based security.',
      keyFeatures: [
        'Real-time messaging with Socket.io',
        'Live user presence indicators',
        'JWT-based authentication & security',
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
      duration: '2024',
      description: 'An e-commerce frontend and backend project focused on faster product lookup, secure sign-in, and cleaner state management.',
      keyFeatures: [
        'Stripe API integration for secure payments',
        'Redux for clean global state management',
        'Firebase authentication',
        'Optimized product search & filtering',
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
