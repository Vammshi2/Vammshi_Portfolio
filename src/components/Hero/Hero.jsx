import React from 'react';
import './Hero.css';
import profile_img from '../../assets/Vamshi_ID.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" className='profile-img' />
      <h1>
        <span>I'm Vamshi Krishna,</span> a final-year B.Tech student in Computer Science at VIT Chennai.
      </h1>
      <p>
        I specialize in web development, data analysis, and building impactful solutions through technology. While I haven't worked professionally yet, I've successfully completed several projects that demonstrate my skills and passion for innovation.
      </p>
      <div className="hero-action">
        {/* Connect with me button */}
        <div
          className="hero-connect"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              const offset = 70; // Adjust for navbar height
              const sectionTop = contactSection.offsetTop - offset;
              window.scrollTo({
                top: sectionTop,
                behavior: 'smooth',
              });
            }
          }}
          style={{ cursor: 'pointer' }}
        >
          <span className="connect-link">Connect with me</span>
        </div>

        {/* My resume button */}
        <div
          className="hero-resume"
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/18F6VIgjlP2oac8Ay4UbPUhDwITRm5GWa/view?usp=sharing',
              '_blank'
            )
          }
          style={{ cursor: 'pointer' }}
        >
          <span className="resume-link">My resume</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
