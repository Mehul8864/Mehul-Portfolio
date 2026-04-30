import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { useInView } from 'react-intersection-observer';
import '../styles/Home.css';
import mehulPhoto from '../assets/mehul.jpeg';

// Animated counter hook
function useCounter(target, duration = 2000, inView) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

function Home() {
  const typedRef = useRef(null);
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const lc = useCounter(1000, 1800, statsInView);
  const lcRating = useCounter(2050, 2000, statsInView);
  const cf = useCounter(850, 1800, statsInView);
  const streak = useCounter(272, 2000, statsInView);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Full Stack Developer', 'Competitive Programmer', 'Problem Solver', 'Open Source Contributor'],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1800,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home">
      <div className="home-particles">
        {[...Array(20)].map((_, i) => <div key={i} className="particle" style={{ '--i': i }}></div>)}
      </div>

      <div className="section-container">
        <div className="home-content">
          {/* Availability badge */}
          <div className="availability-badge">
            <span className="avail-dot"></span>
            Available for Internships &amp; Collaborations
          </div>

          <div className="profile-wrapper">
            <div className="profile-ring"></div>
            <div className="profile-ring ring2"></div>
            <img src={mehulPhoto} alt="Mehul Gupta" className="profile-image" />
          </div>

          <div className="home-text">
            <p className="greeting">👋 Hello, I'm</p>
            <h1 className="main-title">Mehul <span className="highlight">Gupta</span></h1>
            <div className="typing-container">
              <span ref={typedRef} className="typed-text"></span>
            </div>
            <p className="description">
              CS student at IIIT Lucknow passionate about full stack development, competitive programming,
              and building impactful products. Rated 2050 on LeetCode with 1850+ problems solved across platforms.
            </p>
          </div>

          <div className="cta-container">
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }}>
              View Projects <i className="fas fa-arrow-right ms-2"></i>
            </a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>
              Contact Me <i className="fas fa-envelope ms-2"></i>
            </a>
            <a href="https://drive.google.com/file/d/13OPcncELWyktia8y8rY1WU0WMyvYSrKp/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-resume">
              Resume <i className="fas fa-file-alt ms-2"></i>
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/Mehul8864" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mehul-gupta-b38a2b330/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:mehul79067@gmail.com" className="social-link" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://leetcode.com/u/Mehul_Gupta_019/" target="_blank" rel="noopener noreferrer" className="social-link" title="LeetCode">
              <i className="fas fa-code"></i>
            </a>
            <a href="https://codeforces.com/profile/MehulGupta19" target="_blank" rel="noopener noreferrer" className="social-link" title="Codeforces">
              <i className="fas fa-terminal"></i>
            </a>
          </div>

          <div className="stats-row" ref={statsRef}>
            <div className="stat-badge">
              <span className="stat-num">{lc}+</span>
              <span className="stat-label">LeetCode</span>
            </div>
            <div className="stat-badge">
              <span className="stat-num">{lcRating}</span>
              <span className="stat-label">LC Rating</span>
            </div>
            <div className="stat-badge">
              <span className="stat-num">{cf}+</span>
              <span className="stat-label">CF Problems</span>
            </div>
            <div className="stat-badge">
              <span className="stat-num">{streak}</span>
              <span className="stat-label">LC Streak</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} role="button" tabIndex={0}>
        <div className="mouse"><div className="wheel"></div></div>
        <div className="arrow"><span></span><span></span><span></span></div>
      </div>
    </section>
  );
}

export default Home;
