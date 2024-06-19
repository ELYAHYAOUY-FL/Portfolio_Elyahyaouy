import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './Skils.css';

const Skills = () => {
  return (
    <section id="skils">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
  <div className="experience__frontend">
    <h3>Front-end Development</h3>
    <div className="experience__content">
     
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>React</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Angular</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Tailwind</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>SCSS</h4>
      </article>
     
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Bootstrap</h4>
      </article>
     
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>JavaScript</h4>
      </article>
    </div>
  </div>
  <div className="experience__backend">
    <h3>Back-end Development</h3>
    <div className="experience__content">
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Laravel</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>PHP</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Spring Boot</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Spring Data</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Spring Security</h4>
      </article>
     
    </div>
  </div>
  <div className="experience__networking_virtualisation">
    <h3>Networking and Virtualisation</h3>
    <div className="experience__content">
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Packet Tracer</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>GNS3</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Wireshark</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>VMware</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>VMware ESXi</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>VirtualBox</h4>
      </article>
    </div>
  </div>
  <div className="experience__programmingLanguages">
    <h3>Programming Languages and data bases </h3>
    <div className="experience__content">
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>C</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>C++</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Java</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Python</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Mongodb</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Mysql</h4>
      </article>
    </div>
  </div>
  <div className="experience__otherSkills">
    <h3>Other Skills</h3>
    <div className="experience__content">
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Linux</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Docker</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>UML</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Merise</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Postman</h4>
      </article>
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Git/Github</h4>
      </article>
    
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <h4>Trello</h4>
      </article>
    </div>
  </div>
</div>

    </section>
  )
}

export default Skills