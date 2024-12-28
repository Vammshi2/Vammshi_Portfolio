/* Footer JSX */
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            I am Vamshi Krishna Thogaru, a 4th-year undergraduate in Computer Science from VIT Chennai with experience in software development and data analysis. I have a strong background in Python, ReactJS, and database management.
          </p>
          <div className="footer-icons">
            <a href="https://github.com/Vammshi2" target="_blank" rel="noopener noreferrer">
              <FaGithub className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/vammshikrishnat/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="footer-icon" />
            </a>
            <a href="https://leetcode.com/u/Vammshi_2/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="footer-icon" />
            </a>
            <a href="https://www.codechef.com/users/vammshi2" target="_blank" rel="noopener noreferrer">
              <SiCodechef className="footer-icon" />
            </a>
            <a href="https://www.instagram.com/vammshi_4/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="footer-icon" />
            </a>
            <a href="https://x.com/Vammshi" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="footer-icon" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Vamshi Krishna. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
