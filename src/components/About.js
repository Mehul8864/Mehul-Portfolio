import React from 'react';
import '../styles/About.css';

function About() {
  const education = [
    {
      degree: "B.Tech - Computer Science & Engineering",
      institution: "Indian Institute of Information Technology, Lucknow",
      location: "Lucknow, Uttar Pradesh, India",
      duration: "Aug 2024 – Jun 2028",
      score: "In Progress",
      gradient: "linear-gradient(135deg, #667eea, #764ba2)",
      shadow: "rgba(102, 126, 234, 0.4)",
    },
    {
      degree: "Intermediate (Class XII) - CBSE",
      institution: "G.D. Public Senior Secondary School",
      location: "Aligarh, Uttar Pradesh, India",
      duration: "Apr 2022 – Mar 2023",
      score: "91.6%",
      gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
      shadow: "rgba(240, 147, 251, 0.4)",
    },
  ];

  const aboutPoints = [
    { icon: '🎓', text: 'CS student at IIIT Lucknow' },
    { icon: '💻', text: 'Full Stack Developer' },
    { icon: '🏆', text: 'LeetCode Rating: 2050 (1000+ problems)' },
    { icon: '⚡', text: 'Codeforces Rating: 1686' },
    { icon: '🚀', text: 'Built EduFlux, BuddyHub & ModuTech' },
    { icon: '🌟', text: 'Passionate about scalable web apps' },
    { icon: '🔧', text: 'Exploring DevOps & Cloud Architecture' },
  ];

  return (
    <section id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-bio">
            <div className="bio-card">
              <div className="bio-header">
                <div className="bio-avatar">MG</div>
                <div>
                  <h3>Mehul Gupta</h3>
                  <p>Full Stack Developer · IIIT Lucknow</p>
                </div>
              </div>
              <p className="bio-text">
                I am a Computer Science student at IIIT Lucknow with a strong passion for full stack development,
                problem-solving, and building impactful products. I have worked on projects like EduFlux, BuddyHub,
                and ModuTech, gaining hands-on experience with the full stack, real-time communication, authentication,
                and scalable web app development.
              </p>
              <p className="bio-text">
                Along with development, I enjoy competitive programming and have achieved strong ratings on Codeforces,
                LeetCode, and CodeChef, which reflects my consistency and love for logical thinking.
              </p>
              <div className="about-points">
                {aboutPoints.map((point, i) => (
                  <div className="about-point" key={i}>
                    <span className="point-icon">{point.icon}</span>
                    <span>{point.text}</span>
                  </div>
                ))}
              </div>
            </div>


          </div>

          <div className="education-side">
            <h3 className="sub-title">Education</h3>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div className="edu-card" key={index} style={{ '--grad': edu.gradient, '--shadow': edu.shadow }}>
                  <div className="edu-dot"></div>
                  <div className="edu-content">
                    <h4>{edu.degree}</h4>
                    <p className="edu-inst">{edu.institution}</p>
                    <p className="edu-loc"><i className="fas fa-map-marker-alt"></i> {edu.location}</p>
                    <div className="edu-meta">
                      <span><i className="far fa-calendar-alt"></i> {edu.duration}</span>
                      <span className="edu-score"><i className="fas fa-star"></i> {edu.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fun facts */}
            <div className="fun-facts">
              <h3 className="sub-title" style={{ marginTop: '2rem' }}>Fun Facts</h3>
              <div className="facts-grid">
                {[
                  { emoji: '☕', fact: 'Fueled by coffee & algorithms' },
                  { emoji: '🌙', fact: 'Best code written after midnight' },
                  { emoji: '🎯', fact: '272-day LeetCode streak' },
                  { emoji: '🏅', fact: '3× IIT/NIT event winner' },
                ].map((f, i) => (
                  <div className="fact-card" key={i}>
                    <span className="fact-emoji">{f.emoji}</span>
                    <span className="fact-text">{f.fact}</span>
                  </div>
                ))}
              </div>
            </div>
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

export default About;
