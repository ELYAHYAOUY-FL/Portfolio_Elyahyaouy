import React from 'react';
import './Education.css'; // Import the CSS file

const Education = () => {
    const educationData = [
        {
          year: '2023-2025',
          degree: 'Master\'s in IT Security and Big Data',
          institution: 'Faculty of Sciences and Techniques in Tangier'
        },
        {
          year: '2022-2020',
          degree: 'Bachelor\'s in Computer Engineering',
          institution: 'Faculty of Sciences and Techniques in Tangier'
        },
        {
          year: '2020-2019',
          degree: 'University Diploma in Mathematics, Computer Science, and Physics',
          institution: 'Faculty of Sciences and Techniques in Tangier'
        },
        {
          year: '2019',
          degree: 'High School Diploma in Physical Sciences',
          institution: 'Ibn Al Khatab High School'
        }
    ];
    

  return (
    <div className="edu-section" id="education">
      <h2>Education</h2>
      <div className="edu-timeline">
        {educationData.map((item, index) => (
          <div className="edu-timeline-item" key={index}>
            <div className="edu-timeline-content">
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
