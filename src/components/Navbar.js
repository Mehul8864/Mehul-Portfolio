import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });
      setIsNavCollapsed(true);
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Reading progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setReadingProgress(progress);

      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      sections.forEach(section => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.clientHeight) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '💻' },
    { id: 'coding-profiles', label: 'Coding', icon: '👨‍💻' },
    { id: 'certificates', label: 'Certificates', icon: '🏆' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  return (
    <>
      {/* Reading progress bar */}
      <div className="reading-progress-bar" style={{ width: `${readingProgress}%` }}></div>

      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a className="navbar-brand" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <div className="brand-text">
              {'MEHUL'.split('').map((char, i) => <span key={i}>{char}</span>)}
            </div>
          </a>

          <div className="navbar-right-controls">
            {/* Theme toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
              <div className={`hamburger ${!isNavCollapsed ? 'active' : ''}`}>
                <span></span><span></span><span></span>
              </div>
            </button>
          </div>

          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
            <ul className="navbar-nav ms-auto">
              {navItems.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                  >
                    <span className="link-icon">{item.icon}</span>
                    <span className="link-text">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
