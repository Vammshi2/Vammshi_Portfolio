import React, { useState, useEffect } from 'react';
import './Education.css';
import themePattern from '../../assets/theme_pattern.svg';
import btechID from '../../assets/btech_id_card.jpg';
import dataScienceID from '../../assets/data_science_id_card.png';

const educationData = [
  {
    year: "2025-Present",
    degree: "Credit-Linked Program in Data Science",
    institute: "Daksh Gurukul, IIT Guwahati",
    group: "Data Science",
    registerNo: "IITG_DS_2501013",
    idCard: dataScienceID
  },
  {
    year: "2021 - Present",
    degree: "Bachelor of Technology (B.Tech)",
    institute: "Vellore Institute of Technology, Chennai",
    group: "Computer Science and Engineering",
    registerNo: "2021107888/21BCE5282",
    idCard: btechID
  },
  {
    year: "2021",
    degree: "Telangana Board (XII)",
    institute: "Sri Chaitanya Junior College, Hyderabad",
    group: "MPC",
    registerNo: "2158208090"
  },
  {
    year: "2019",
    degree: "Telangana Board (X)",
    institute: "TEJA Talent School, Kodad",
    group: "General",
    registerNo: "1930106554"
  }
];

const Education = () => {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' || event.key === 'Space') {
        setModalImage(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div id="education" className="education">
      <div className="title-box">
        <h1>Education</h1>
        <img src={themePattern} alt="Theme Pattern" />
      </div>

      <div className="education-container">
        {educationData.map((entry, index) => (
          <div key={index} className="education-item">
            <h2>{entry.degree}</h2>
            <p>{entry.institute}</p>
            {entry.group && <p><strong>Group:</strong> {entry.group}</p>}
            <p><strong>Year:</strong> {entry.year}</p>
            <p><strong>Register No:</strong> {entry.registerNo}</p>
            {entry.idCard && (
              <span className="id-text" onClick={() => setModalImage(entry.idCard)}>
                {' '}[IDCARD]
              </span>
            )}
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="ID Card" />
            <button className="modal-close" onClick={() => setModalImage(null)} aria-label="Close Modal">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
