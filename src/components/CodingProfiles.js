import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/CodingProfiles.css';

// Inline SVG rating graphs based on actual contest history
function RatingGraph({ platform, color }) {
  const graphs = {
    CodeChef: {
      // Upward trend from ~1600 to 1927, with colored bands
      bands: [
        { y: 0, h: 25, fill: 'rgba(167,139,250,0.15)' },   // purple top
        { y: 25, h: 25, fill: 'rgba(100,180,255,0.15)' },  // blue
        { y: 50, h: 25, fill: 'rgba(100,255,180,0.15)' },  // green
        { y: 75, h: 25, fill: 'rgba(200,200,200,0.1)' },   // grey
      ],
      points: '10,90 20,85 30,82 40,78 50,75 55,72 60,74 65,70 70,65 80,58 90,52 100,48 115,44 130,40 145,36 160,32 175,28 185,24 195,20 205,18',
      dotColor: '#FFB800',
    },
    Codeforces: {
      bands: [
        { y: 0, h: 20, fill: 'rgba(167,139,250,0.15)' },
        { y: 20, h: 20, fill: 'rgba(100,180,255,0.2)' },
        { y: 40, h: 20, fill: 'rgba(100,220,130,0.2)' },
        { y: 60, h: 40, fill: 'rgba(200,200,200,0.08)' },
      ],
      points: '10,88 20,84 25,80 30,82 35,78 40,75 45,77 50,73 55,68 60,65 70,60 80,55 90,50 100,46 110,42 120,38 130,35 140,32 150,30 160,28 170,26 180,24 190,22 200,20 210,22',
      dotColor: '#1F8ACB',
    },
    LeetCode: {
      bands: [
        { y: 0, h: 100, fill: 'rgba(30,30,40,0.0)' },
      ],
      points: '10,85 25,80 35,78 45,74 55,70 65,66 75,62 85,58 95,54 105,50 115,46 120,42 125,38 130,35 140,32 150,30 155,26 160,28 165,25 170,24 175,22 185,24 195,22 205,20 215,22',
      dotColor: '#FFA116',
    },
  };

  const g = graphs[platform];
  if (!g) return null;

  return (
    <svg viewBox="0 0 220 100" className="rating-svg" preserveAspectRatio="none">
      {g.bands.map((b, i) => (
        <rect key={i} x="0" y={b.y} width="220" height={b.h} fill={b.fill} />
      ))}
      <polyline
        points={g.points}
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {g.points.split(' ').map((pt, i) => {
        const [x, y] = pt.split(',');
        if (i % 3 !== 0) return null;
        return <circle key={i} cx={x} cy={y} r="2.5" fill={color} />;
      })}
      {/* Last point highlighted */}
      {(() => {
        const pts = g.points.split(' ');
        const last = pts[pts.length - 1].split(',');
        return <circle cx={last[0]} cy={last[1]} r="4" fill="none" stroke={color} strokeWidth="2" />;
      })()}
    </svg>
  );
}

function CodingProfiles() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const profiles = [
    {
      platform: 'CodeChef',
      username: 'mehulgupta2005',
      rating: 1927,
      maxRating: 3000,
      rank: '4★',
      color: '#FFB800',
      gradient: 'linear-gradient(135deg, #FFB800, #FF8C00)',
      icon: 'fas fa-utensils',
      link: 'https://www.codechef.com/users/mehulgupta2005',
      stats: [
        { label: 'Problems Solved', value: '80+' },
        { label: 'Contest Rating', value: '1927' },
        { label: 'Stars', value: '4★' },
      ],
      badge: '⭐ 4 Star',
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
        { label: 'Problems Solved', value: '850+' },
        { label: 'Contest Rating', value: '1686' },
        { label: 'Rank', value: 'Expert' },
      ],
      badge: '🔵 Expert',
    },
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
        { label: 'Problems Solved', value: '1000+' },
        { label: 'Contest Rating', value: '2050' },
        { label: 'Global Rank', value: 'Top 5%' },
      ],
      badge: '🏅 Knight',
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
            <span className="cp-sum-num">1850+</span>
            <span className="cp-sum-label">Total Problems</span>
          </div>
          <div className="cp-divider"></div>
          <div className="cp-summary-item">
            <span className="cp-sum-num">2050</span>
            <span className="cp-sum-label">Best Rating</span>
          </div>
          <div className="cp-divider"></div>
          <div className="cp-summary-item">
            <span className="cp-sum-num">282</span>
            <span className="cp-sum-label">Max Streak</span>
          </div>
          <div className="cp-divider"></div>
          <div className="cp-summary-item">
            <span className="cp-sum-num">6</span>
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

              {/* Rating graph */}
              <div className="profile-graph-wrap">
                <RatingGraph platform={profile.platform} color={profile.color} />
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
