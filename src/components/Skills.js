import React from 'react';

const Skills = ({ data }) => {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        {data.map((skill, index) => (
          <div key={index} className="mb-3">
            <h3>{skill.title}</h3>
            <ul className="list-inline">
              {skill.skillNames.map((skillName, idx) => (
                <li key={idx} className="list-inline-item">
                  {skillName}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
