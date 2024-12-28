import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/Vamshi_ID.jpg';

const AboutSkill = ({ label, width }) => (
  <div className="about-skill">
    <p>{label}</p>
    <hr style={{ width }} />
  </div>
);

const AboutAchievement = ({ number, description }) => (
  <div className="about-achievement">
    <h1>{number}</h1>
    <p>{description}</p>
  </div>
);

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a passionate and dedicated Software Developer with expertise in web development, data analysis, and problem-solving. Currently pursuing my B.Tech in Computer Science at VIT Chennai, I have gained hands-on experience in building dynamic web applications and predictive models.</p>
            <p>Throughout my academic journey, I have developed and deployed impactful projects, showcasing my proficiency in programming and a commitment to creating efficient solutions.</p>
          </div>
          <div className="about-skills">
            <AboutSkill label="HTML, CSS & JS" width="80%" />
            <AboutSkill label="React JS" width="75%" />
            <AboutSkill label="Python & DSA" width="70%" />
            <AboutSkill label="SQL" width="85%" />
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <AboutAchievement number="3+" description="YEARS OF ACADEMIC EXPERIENCE" />
        <hr />
        <AboutAchievement number="5+" description="PROJECTS COMPLETED" />
        <hr />
        <AboutAchievement number="96" description="ALL-INDIA RANK IN DATA SCIENCE TEST" />
      </div>
    </div>
  );
};

export default About;
