import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/mw.jpeg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>7+ Completed Projects</small>
            </article>
          </div>
          <p>Hello, I am a software engineer and a student in the Master's program specializing in IT Security and Big Data. I am deeply passionate about development and security, continuously seeking learning opportunities to explore the latest technologies and solve complex problems. My approach combines analytical thinking, effective teamwork, and a strong ability to find innovative solutions, reflecting my dedication, rigor, and serious work ethic. I excel in analyzing and synthesizing information, quickly grasping new concepts to propose creative solutions.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro