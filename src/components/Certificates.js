import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Certificates.css';

import iitBombay from '../assets/certificates/iit-bombay.jpg';
import enginow from '../assets/certificates/enginow.jpg';
import codehurdle from '../assets/certificates/codehurdle.jpg';
import reverseEngineering from '../assets/certificates/reverse-engineering.jpg';
import codelocks from '../assets/certificates/codelocks.jpg';
import codeVenture from '../assets/certificates/code-venture.jpg';

function Certificates() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certificates = [
    {
      title: '1st Position – Codecode',
      subtitle: 'Certificate of Excellence',
      issuer: 'Techfest, IIT Bombay · Kanpur Zonals',
      date: '8th Nov 2025',
      icon: '🥇',
      color: '#FFD700',
      gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
      link: 'https://drive.google.com/file/d/1ozUPxAyPZ9CLSr9GrShZSDdWu9c08ULq/view?usp=sharing',
      image: iitBombay,
      type: 'Achievement',
    },
    {
      title: '1st Rank – Ai-Thon Global Coding Conquest',
      subtitle: 'Certificate of Completion',
      issuer: 'Enginow · IIIT Lucknow',
      date: '2025',
      icon: '🏆',
      color: '#667eea',
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
      link: 'https://drive.google.com/file/d/16fFrfpDjWbFVIlTDipzpXwbQ9MI9t4sX/view?usp=sharing',
      image: enginow,
      type: 'Achievement',
    },
    {
      title: '1st Rank – CodeHurdle Athlos 04',
      subtitle: 'Certificate of Distinction',
      issuer: 'CodeHurdle · Round 1',
      date: '2026',
      icon: '🥇',
      color: '#a78bfa',
      gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
      link: 'https://drive.google.com/file/d/1p-hiVNeIT17ZvhiONCNhQjQMufObgi1b/view?usp=sharing',
      image: codehurdle,
      type: 'Achievement',
    },
    {
      title: '1st Position – Reverse Engineering',
      subtitle: 'Certificate of Appreciation',
      issuer: "Invictus '26, DTU · Team CodeDuo",
      date: '2026',
      icon: '🥇',
      color: '#f093fb',
      gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
      link: 'https://drive.google.com/file/d/1M6ADqz_iwVsH99vLSzRY_8EehSYR36me/view?usp=sharing',
      image: reverseEngineering,
      type: 'Achievement',
    },
    {
      title: '2nd Position – Codelocks',
      subtitle: 'Certificate of Appreciation',
      issuer: "Invictus '26, DTU Technical Council",
      date: '2026',
      icon: '🥈',
      color: '#C0C0C0',
      gradient: 'linear-gradient(135deg, #bdc3c7, #2c3e50)',
      link: 'https://drive.google.com/file/d/1zUc8fOvkWu8Rc0OkhjmfDBVEWHyZAT1P/view?usp=sharing',
      image: codelocks,
      type: 'Achievement',
    },
    {
      title: '2nd Position – Code Venture',
      subtitle: 'Certificate of Merit',
      issuer: "Pragyan '26, NIT Tiruchirappalli",
      date: 'Feb 2026',
      icon: '🥈',
      color: '#4facfe',
      gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
      link: 'https://drive.google.com/file/d/1i_3mB1EqGER0NK3c1CkVX7oQlXiGIrec/view?usp=sharing',
      image: codeVenture,
      type: 'Achievement',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="certificates">
      <div className="section-container">
        <h2 className="section-title">Achievements & Certificates</h2>

        <div className="cert-stats">
          <div className="cert-stat"><span>6</span><p>Certificates</p></div>
          <div className="cert-stat"><span>4</span><p>1st Positions</p></div>
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
            >
              {/* Certificate image preview */}
              <div className="cert-image-wrap">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-preview-img"
                  loading="lazy"
                />
                <div className="cert-image-overlay">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-view-btn"
                  >
                    <i className="fas fa-expand-alt"></i> View Full
                  </a>
                </div>
              </div>

              {/* Card info */}
              <div className="cert-info">
                <div className="cert-top">
                  <span className="cert-icon">{cert.icon}</span>
                  <span className="cert-type">{cert.type}</span>
                </div>
                <div className="cert-body">
                  <p className="cert-subtitle">{cert.subtitle}</p>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date"><i className="far fa-calendar-alt"></i> {cert.date}</p>
                </div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-btn">
                  View Certificate <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
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
