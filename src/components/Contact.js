import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

// ── EmailJS config ──────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and sign up (free)
// 2. Add an Email Service (Gmail) → copy the Service ID
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//    Set "To Email" in the template to mehul79067@gmail.com
// 4. Copy your Public Key from Account → API Keys
// Replace the three values below:
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'abcDEFghiJKL'
// ────────────────────────────────────────────────────────────────

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          subject:    formData.subject,
          message:    formData.message,
          to_email:   'mehul79067@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const contactInfo = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'mehul79067@gmail.com', link: 'mailto:mehul79067@gmail.com' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'IIIT Lucknow, India', link: null },
    { icon: 'fab fa-github', label: 'GitHub', value: 'github.com/Mehul8864', link: 'https://github.com/Mehul8864' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'Mehul Gupta', link: 'https://www.linkedin.com/in/mehul-gupta-b38a2b330/' },
  ];

  const socialLinks = [
    { icon: 'fab fa-github', link: 'https://github.com/Mehul8864', color: '#333', label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/mehul-gupta-b38a2b330/', color: '#0077B5', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', link: 'mailto:mehul79067@gmail.com', color: '#D44638', label: 'Email' },
    { icon: 'fas fa-code', link: 'https://leetcode.com/u/Mehul_Gupta_019/', color: '#FFA116', label: 'LeetCode' },
    { icon: 'fas fa-terminal', link: 'https://codeforces.com/profile/MehulGupta19', color: '#1F8ACB', label: 'Codeforces' },
  ];

  return (
    <>
      <section id="contact">
        <div className="section-container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Get In Touch
          </motion.h2>

          <div className="contact-wrapper">
            <motion.div className="contact-info" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-desc">
                I'm open to internship opportunities, collaborations, and interesting projects.
                Feel free to reach out!
              </p>

              <div className="contact-details">
                {contactInfo.map((item, i) => (
                  <div className="info-item" key={i}>
                    <div className="info-icon"><i className={item.icon}></i></div>
                    <div className="info-text">
                      <span className="info-label">{item.label}</span>
                      {item.link
                        ? <a href={item.link} target="_blank" rel="noopener noreferrer">{item.value}</a>
                        : <span>{item.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-section">
                <h4>Find me on</h4>
                <div className="social-icons">
                  {socialLinks.map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-btn"
                      style={{ '--sc': s.color }}
                      title={s.label}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className={s.icon}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div className="contact-form-wrap" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" type="text" name="subject" placeholder="What's this about?" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" name="message" placeholder="Your message..." value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <motion.button
                  type="submit"
                  className={`send-btn ${status}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' && <><i className="fas fa-spinner fa-spin"></i> Sending...</>}
                  {status === 'success' && <>✅ Message Sent!</>}
                  {status === 'error'   && <>❌ Failed. Try again</>}
                  {status === 'idle'    && <><i className="fas fa-paper-plane"></i> Send Message</>}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Mehul Gupta. Designed & Developed with ❤️</p>
        <div className="footer-links">
          <a href="https://github.com/Mehul8864" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/mehul-gupta-b38a2b330/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </footer>
    </>
  );
}

export default Contact;
