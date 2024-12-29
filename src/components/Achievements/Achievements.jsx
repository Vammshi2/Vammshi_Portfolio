import React from 'react';
import './Achievements.css';
import themePattern from '../../assets/theme_pattern.svg';
import achievementsData from '../../assets/achievements_data';

const Achievements = () => {
  return (
    <section id="Achievements" className="achievements">
      {/* Section Title */}
      <div className="title-box">
        <h1>Achievements</h1>
        <img src={themePattern} alt="Decorative Theme Pattern" />
      </div>

      {/* Achievements Items or Fallback Message */}
      <div className="achievements-container">
        {achievementsData && achievementsData.length > 0 ? (
          achievementsData.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <h2>{achievement.title}</h2>
              <p>{achievement.description}</p>
            </div>
          ))
        ) : (
          <div className="progress-message">
            <p>It is in progress...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
