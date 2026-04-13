import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/CodingProfiles.css';

function CodingProfiles() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const profiles = [
    {
      platform: 'LeetCode',
      username: 'Mehul_Gupta_019',
      rating: 2050,
      maxRating: 3000,
      rank: 'Knight',
      color: '#FFA116',
      gradient: 'linear-gradient(135deg, #FFA116, #FF6B6B)',
      icon: 'fas fa-code',
      link: 'https://leetcode.com/u/Mehul_Gupta_019/',
      stats: [
        { label: 'Problems Solved', value: '950+' },
        { label: 'Contest Rating', value: '2050' },
        { label: 'Global Rank', value: 'Top 5%' },
      ],
      badge: '🏅 Knight',
    },
    {
      platform: 'Codeforces',
      username: 'MehulGupta19',
      rating: 1686,
      maxRating: 3500,
      rank: 'Expert',
      color: '#1F8ACB',
      gradient: 'linear-gradient(135deg, #1F8ACB, #4A90E2)',
      icon: 'fas fa-terminal',
      link: 'https://codeforces.com/profile/MehulGupta19',
      stats: [
        { label: 'Problems Solved', value: '800+' },
        { label: 'Contest Rating', value: '1686' },
        { label: 'Rank', value: 'Expert' },
      ],
      badge: '🔵 Expert',
    },
    {
      platform: 'CodeChef',
      username: 'mehulgupta2005',
      rating: 1919,
      maxRating: 3000,
      rank: '4★',
      color: '#FFB800',
      gradient: 'linear-gradient(135deg, #FFB800, #FF8C00)',
      icon: 'fas fa-utensils',
      link: 'https://www.codechef.com/users/mehulgupta2005',
      stats: [
        { label: 'Problems Solved', value: '80+' },
        { label: 'Contest Rating', value: '1919' },
        { label: 'Stars', value: '4★' },
      ],
      badge: '⭐ 4 Star',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="coding-profiles">
      <div className="section-container">
        <h2 className="section-title">Coding Profiles</h2>

        <div className="cp-summary">
          <div className="cp-summary-item">
            <span className="cp-sum-num">1750+</span>
            <span className="cp-sum-label">Total Problems</span>
          </div>
          <div className="cp-divider"></div>
          <div className="cp-summary-item">
            <span className="cp-sum-num">2050</span>
            <span className="cp-sum-label">Best Rating</span>
          </div>
          <div className="cp-divider"></div>
          <div className="cp-summary-item">
            <span className="cp-sum-num">3</span>
            <span className="cp-sum-label">Platforms</span>
          </div>
          <div className="cp-divider"></div>
          <div className="cp-summary-item">
            <span className="cp-sum-num">4+</span>
            <span className="cp-sum-label">Achievements</span>
          </div>
        </div>

        <motion.div
          className="profiles-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {profiles.map((profile, index) => (
            <motion.div
              className="profile-card"
              key={index}
              variants={cardVariants}
              style={{ '--color': profile.color, '--grad': profile.gradient }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="profile-card-top">
                <div className="platform-icon-wrap">
                  <i className={profile.icon}></i>
                </div>
                <div className="profile-badge">{profile.badge}</div>
              </div>

              <h3 className="platform-name">{profile.platform}</h3>
              <p className="username">@{profile.username}</p>

              <div className="rating-bar-wrap">
                <div className="rating-bar-label">
                  <span>Rating</span>
                  <span className="rating-val">{profile.rating}</span>
                </div>
                <div className="rating-bar-bg">
                  <motion.div
                    className="rating-bar-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(profile.rating / profile.maxRating) * 100}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: index * 0.2, ease: 'easeOut' }}
                  ></motion.div>
                </div>
              </div>

              <div className="profile-stats">
                {profile.stats.map((stat, i) => (
                  <div className="stat-row" key={i}>
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-value">{stat.value}</span>
                  </div>
                ))}
              </div>

              <a href={profile.link} target="_blank" rel="noopener noreferrer" className="profile-link">
                View Profile <i className="fas fa-external-link-alt"></i>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="scroll-indicator" onClick={() => document.getElementById('certificates').scrollIntoView({ behavior: 'smooth' })} role="button" tabIndex={0}>
        <div className="mouse"><div className="wheel"></div></div>
        <div className="arrow"><span></span><span></span><span></span></div>
      </div>
    </section>
  );
}

export default CodingProfiles;
