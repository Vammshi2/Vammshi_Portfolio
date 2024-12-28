import React from 'react';
import './MyWork.css';
import themePattern from '../../assets/theme_pattern.svg';
import myWorkData from '../../assets/mywork_data';
import arrowIcon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <section id="MyWork" className="mywork">
      {/* Section Title */}
      <div className="title-box">
        <h1>Projects</h1>
        <img src={themePattern} alt="Decorative Theme Pattern" />
      </div>

      {/* Work Items */}
      <div className="mywork-container">
        {myWorkData.map((work, index) => (
          <div key={index} className="mywork-format">
            <h2>{work.title}</h2>
            <p>{work.description}</p>
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mywork-readmore"
            >
              <span>View Project</span>
              <img src={arrowIcon} alt="Arrow Icon" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWork;
