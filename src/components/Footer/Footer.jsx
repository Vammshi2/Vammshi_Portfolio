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
            <a href="https://leetcode.com/u/Vammshi22/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="footer-icon" />
            </a>
            <a href="https://www.codechef.com/users/vammshi22" target="_blank" rel="noopener noreferrer">
              <SiCodechef className="footer-icon codechef-icon" />
            </a>
            <a href="https://www.codeforces.com/profile/vammshi22" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="code-forces" className="footer-icon" style={{ width: '24px', height: '24px' }}>
                <path fill="#F44336" d="M24 19.5V12a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 18 12v7.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5z"></path>
                <path fill="#2196F3" d="M13.5 21a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 13.5 3h-3C9.673 3 9 3.672 9 4.5v15c0 .828.673 1.5 1.5 1.5h3z"></path>
                <path fill="#FFC107" d="M0 19.5c0 .828.673 1.5 1.5 1.5h3A1.5 1.5 0 0 0 6 19.5V9a1.5 1.5 0 0 0-1.5-1.5h-3C.673 7.5 0 8.172 0 9v10.5z"></path>
              </svg>
            </a>
            <a href="https://www.hackerrank.com/profile/t_vamshikrishna3" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="hacker-rank" className="footer-icon" style={{ width: '24px', height: '24px' }}>
                <path fill="#2EC866" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z"></path>
                <path fill="#fff" d="M10 17h4v-2h-2v-2h2v-2h-2V9h2V7h-4v2h2v2h-2v2h2v2h-2z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/vammshi_4/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="footer-icon instagram-icon" />
            </a>
            <a href="https://x.com/Vammshi" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="footer-icon twitter-icon" />
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
