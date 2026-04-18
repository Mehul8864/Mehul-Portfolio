import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Certificates.css';

function Certificates() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certificates = [
    {
      title: '2nd Position – Codelocks',
      issuer: 'Invictus \'26, DTU Technical Council',
      date: '2026',
      icon: '🥈',
      color: '#C0C0C0',
      gradient: 'linear-gradient(135deg, #bdc3c7, #2c3e50)',
      link: 'https://drive.google.com/file/d/1zUc8fOvkWu8Rc0OkhjmfDBVEWHyZAT1P/view?usp=sharing',
      type: 'Achievement',
    },
    {
      title: '1st Position – Codecode',
      issuer: 'Techfest, IIT Bombay (Kanpur Zonals)',
      date: 'Nov 2025',
      icon: '🥇',
      color: '#FFD700',
      gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
      link: 'https://drive.google.com/file/d/1ozUPxAyPZ9CLSr9GrShZSDdWu9c08ULq/view?usp=sharing',
      type: 'Achievement',
    },
    {
      title: '1st Rank – Ai-Thon Global Coding Conquest',
      issuer: 'Enginow · IIIT Lucknow',
      date: '2025',
      icon: '🏆',
      color: '#667eea',
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
      link: 'https://drive.google.com/file/d/16fFrfpDjWbFVIlTDipzpXwbQ9MI9t4sX/view?usp=sharing',
      type: 'Achievement',
    },
    {
      title: '1st Position – Reverse Engineering',
      issuer: 'Invictus \'26, DTU · Team CodeDuo',
      date: '2026',
      icon: '🥇',
      color: '#f093fb',
      gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
      link: 'https://drive.google.com/file/d/1M6ADqz_iwVsH99vLSzRY_8EehSYR36me/view?usp=sharing',
      type: 'Achievement',
    },
    {
      title: '2nd Position – Code Venture',
      issuer: 'Pragyan \'26, NIT Tiruchirappalli',
      date: 'Feb 2026',
      icon: '🥈',
      color: '#4facfe',
      gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
      link: 'https://drive.google.com/file/d/1i_3mB1EqGER0NK3c1CkVX7oQlXiGIrec/view?usp=sharing',
      type: 'Achievement',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="certificates">
      <div className="section-container">
        <h2 className="section-title">Achievements & Certificates</h2>

        <div className="cert-stats">
          <div className="cert-stat"><span>5</span><p>Certificates</p></div>
          <div className="cert-stat"><span>3</span><p>1st Positions</p></div>
          <div className="cert-stat"><span>3</span><p>IIT/NIT Events</p></div>
        </div>

        <motion.div
          className="certificates-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {certificates.map((cert, index) => (
            <motion.div
              className="certificate-card"
              key={index}
              variants={cardVariants}
              style={{ '--color': cert.color, '--grad': cert.gradient }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="cert-top">
                <span className="cert-icon">{cert.icon}</span>
                <span className="cert-type">{cert.type}</span>
              </div>
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date"><i className="far fa-calendar-alt"></i> {cert.date}</p>
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-btn">
                View Certificate <i className="fas fa-external-link-alt"></i>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="scroll-indicator" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} role="button" tabIndex={0}>
        <div className="mouse"><div className="wheel"></div></div>
        <div className="arrow"><span></span><span></span><span></span></div>
      </div>
    </section>
  );
}

export default Certificates;
