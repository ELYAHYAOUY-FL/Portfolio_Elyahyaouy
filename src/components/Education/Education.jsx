import React from 'react';
import './Education.css'; // Import the CSS file

const Education = () => {
  const educationData = [
    {
      year: '2023-2025',
      degree: 'Master en Sécurité IT et Big Data',
      institution: 'Faculté des Sciences et Techniques à Tanger'
    },
    {
      year: '2022-2020',
      degree: 'Licence en Génie Informatique',
      institution: 'Faculté des Sciences et Techniques à Tanger'
    },
    {
      year: '2020-2019',
      degree: 'Diplôme d\'Études Universitaires en Mathématiques, Informatique et Physique',
      institution: 'Faculté des Sciences et Techniques à Tanger'
    },
    {
      year: '2019',
      degree: 'Baccalauréat en Sciences Physiques',
      institution: ''
    }
  ];

  return (
    <div className="education-section">
      <h2>Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <h3>{item.year}</h3>
              <p>{item.degree}</p>
              <p>{item.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
