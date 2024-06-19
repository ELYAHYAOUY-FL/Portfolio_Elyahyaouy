import React from 'react';
import IMG2 from '../../assets/img1.png';
import IMG3 from '../../assets/img2.png';
import IMG4 from '../../assets/img3.png';
import IMG5 from '../../assets/img2.png';
import IMG6 from '../../assets/img5.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
   
    {
      id: 2,
      title: 'MLOps Integration for Malware Detection',
      img: IMG2,
      description:
        'Development of two models: one based on signatures and another on images. Backup and deployment of models via a web interface with Flask and Angular. Using MLOps practices to manage the model lifecycle. Tools: OpenCV, Sklearn, Docker, Kubernetes, GitHub (CI/CD), Flask.',
      technologies: 'OpenCV | Sklearn | Docker | Kubernetes | GitHub CI/CD | Flask | Angular',
      link: 'https://mlops-malware-detection.example.com',
      github: 'https://github.com/ELYAHYAOUY-FL/Machine-learning_Signature-Image_malware.git',
    },
    {
      id: 3,
      title: 'Real-time Churn Prediction',
      img: IMG3,
      description:
        'Development of a web application using Apache Kafka Streams to predict customer churn in real-time. Data preprocessing with PySpark Mlib, training multiple models, saving the best model for predictions, storing results in MongoDB, and displaying via Flask or Django.',
      technologies: 'Apache Kafka Streams | PySpark Mlib | Flask | Django | MongoDB',
     
      github: 'https://github.com/YourGitHubUsername/real-time-churn-prediction',
    },
  
    {
      id: 4,
      title: 'Eduviva Web Application',
      img: IMG4,
      description:
        'Secure design and development of a web application for searching discount opportunities for foreign students, based on a microservices architecture using Spring Boot, Spring Security, Angular, REST API, and CSRF.',
      technologies: 'Spring Boot | Spring Security | Angular | REST API | CSRF',
      link: 'https://eduviva.example.com',
      github: 'https://github.com/YourGitHubUsername/eduviva-web-app',
    },
    {
      id: 5,
      title: 'Network Architecture Simulation',
      img: IMG5,
      description:
        'Design and implementation of a complex network architecture with DMZ, firewall, IDS/IPS using Packet Tracer, GNS3, and VMware.',
      technologies: 'Packet Tracer | GNS3 | VMware',
      link: 'https://network-architecture-simulation.example.com',
      github: 'https://github.com/YourGitHubUsername/network-architecture-simulation',
    },
    {
      id: 6,
      title: 'Furnishings E-commerce Site',
      img: IMG6,
      description:
        'Secure design and development of an e-commerce site for Furnishings using Laravel, JavaScript, and Responsive Design, with a focus on protecting sensitive user data and preventing vulnerabilities.',
      technologies: 'Laravel | JavaScript | Responsive Design',
      link: 'https://furnishings-ecommerce.example.com',
      github: 'https://github.com/YourGitHubUsername/furnishings-ecommerce',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
           
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
