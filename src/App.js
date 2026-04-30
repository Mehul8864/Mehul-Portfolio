// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import './styles/App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : '';
  }, [theme]);

  return (
    <div className={`App ${theme === 'light' ? 'light-theme' : ''}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <CodingProfiles />
      <Certificates />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
