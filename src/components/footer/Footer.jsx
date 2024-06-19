import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">El Yahyaouy_Fl</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experinece</a></li>
        <li><a href="#skils">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testmonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/imane-el-yahyaouy/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/ELYAHYAOUY-FL" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
