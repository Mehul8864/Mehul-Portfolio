import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Experience.css';

function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Open Source Contributions',
      duration: 'Jan 2025 – Present',
      type: 'Open Source',
      icon: '🌐',
      color: '#64ffda',
      gradient: 'linear-gradient(135deg, #64ffda, #00b4d8)',
      points: [
        'Contributed to 5+ open source repositories on GitHub with bug fixes and feature additions',
        'Improved documentation and test coverage for React-based projects',
        'Collaborated with global developers via pull requests and code reviews',
      ],
    },
    {
      role: 'Competitive Programmer',
      company: 'LeetCode · Codeforces · CodeChef',
      duration: 'Aug 2023 – Present',
      type: 'Competitive Programming',
      icon: '🏆',
      color: '#a78bfa',
      gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
      points: [
        'Achieved Knight rank on LeetCode with 2050+ rating and 1000+ problems solved',
        'Reached Expert rank on Codeforces with 1686 rating and 850+ problems solved',
        'Won 1st place at IIT Bombay Techfest (Kanpur Zonals) coding contest',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'Personal Projects',
      duration: 'Mar 2025 – Present',
      type: 'Freelance / Personal',
      icon: '💻',
      color: '#667eea',
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
      points: [
        'Built EduFlux — a production-ready ed-tech platform used by 35+ users with Razorpay integration',
        'Developed BuddyHub — a real-time messaging app with Socket.io and JWT authentication',
        'Created ModuTech — an e-commerce platform with Stripe payments and Firebase auth',
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="experience">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>

        <motion.div
          className="experience-timeline"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              className="exp-item"
              key={index}
              variants={itemVariants}
              style={{ '--color': exp.color, '--grad': exp.gradient }}
            >
              <div className="exp-line-wrap">
                <div className="exp-dot">
                  <span>{exp.icon}</span>
                </div>
                {index < experiences.length - 1 && <div className="exp-connector"></div>}
              </div>

              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-duration">
                      <i className="far fa-calendar-alt"></i> {exp.duration}
                    </span>
                    <span className="exp-type">{exp.type}</span>
                  </div>
                </div>

                <ul className="exp-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning */}
        <div className="learning-section">
          <h3 className="learning-title">
            <span className="learning-pulse"></span>
            Currently Learning
          </h3>
          <div className="learning-tags">
            {['Docker & Kubernetes', 'System Design', 'GraphQL', 'AWS Cloud', 'Redis', 'CI/CD Pipelines', 'Microservices'].map((item, i) => (
              <span className="learning-tag" key={i}>
                <span className="tag-dot"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })} role="button" tabIndex={0}>
        <div className="mouse"><div className="wheel"></div></div>
        <div className="arrow"><span></span><span></span><span></span></div>
      </div>
    </section>
  );
}

export default Experience;
