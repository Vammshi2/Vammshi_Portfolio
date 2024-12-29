import React from 'react';
import './Experience.css';
import themePattern from '../../assets/theme_pattern.svg';

const experienceData = [ 
  { 
    title: 'Data Analytics Intern',
    company: 'Unified Mentor',
    duration: 'Mar 2024 - June 2024',
    description: [
      'Analyzed complex datasets to identify trends and patterns.',
      'Developed visualizations using tools like Power BI and Python.',
      'Collaborated with cross-functional teams to optimize reporting processes.',
      'Extracted actionable insights to improve decision-making processes.',
    ],
  }, 
  {
    title: 'Data Scientist Intern',
    company: 'Evoastra Ventures',
    duration: 'Jan 2024 - March 2024',
    description: [
      'Performed data scraping and analysis to gather actionable insights.',
      'Created Power BI dashboards, enhancing data visualization for business decisions.',
      'Applied statistical models and Python libraries (pandas, NumPy, Matplotlib) for data processing.',
      'Worked closely with cross-functional teams to deliver insights on key performance metrics.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="Experience" className="experience">
      {/* Section Title */}
      <div className="title-box">
        <h1>Experience</h1>
        <img src={themePattern} alt="Decorative Theme Pattern" />
      </div>

      {/* Experience Items */}
      <div className="experience-container">
        {experienceData.map((experience, index) => (
          <div key={index} className="experience-card">
            <h2>{experience.title}</h2>
            <h3>{experience.company}</h3>
            <span>{experience.duration}</span>
            <ul className="experience-description">
              {experience.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
