import React from 'react';
import './Skills.css';
import themePattern from '../../assets/theme_pattern.svg';

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["C/C++", "Python", "JavaScript", "HTML", "CSS"]
    },
    {
      category: "Frameworks and Libraries",
      skills: [
        "Node.js",
        "React.js",
        "Express.js",
        "OpenCV",
        "XGBoost",
        "Scikit-learn",
        "numpy",
        "pandas",
        "Matplotlib",
        "Seaborn"
      ]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Flask"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB"]
    },
    {
      category: "Core Concepts",
      skills: [
        "Data Structures & Algorithms (DSA)",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Operating Systems (OS)",
        "System Design (HLD/LLD)"
      ]
    }
  ];

  const softSkills = [
    {
      id: 1,
      title: "Non-Stop Learning",
      description: "Technology never stops updating, so those who work with it should never stop learning."
    },
    {
      id: 2,
      title: "Communicative",
      description: "Communication is essential in any field, regardless of profession."
    },
    {
      id: 3,
      title: "Open-Minded",
      description: "Working for people requires accepting and adapting to new ideas from clients or team members."
    },
    {
      id: 4,
      title: "Problem-Solving",
      description: "Approaching challenges creatively and efficiently to find solutions."
    },
    {
      id: 5,
      title: "Adaptability",
      description: "Quickly adjusting to changing environments and technologies."
    },
    {
      id: 6,
      title: "Time Management",
      description: "Balancing priorities and deadlines effectively to deliver results."
    }
  ];

  return (
    <div id="skills" className="skills">
      {/* Title Section */}
      <div className="title-box">
        <h1>Skills</h1>
        <img src={themePattern} alt="Theme Pattern" />
      </div>

      {/* Technical Skills */}
      {technicalSkills.map((category, index) => (
        <div key={index} className="skills-category">
          <h2>{category.category}</h2>
          <div className="skills-list">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <p>➤ {skill}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Soft Skills Section */}
      <div className="skills-summary">
        <h2>Since the Beginning of My Journey in Growth and Learning:</h2>
        <p>I've improved my soft skills, always seeking to be a better professional.</p>

        <div className="soft-skills">
          {softSkills.map((skill) => (
            <div key={skill.id} className="soft-skill">
              <h3>{String(skill.id).padStart(2, '0')}</h3>
              <h4>{skill.title}</h4>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
