import React from 'react';

const AwardsSection = ({ data }) => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
      <div className="my-auto">
        <h2 className="mb-5">Awards & Certifications</h2>
        <div className="award-list">
          {data.map((award, index) => (
            <div key={index} className="award-item">
              <h3 className="award-title">{award.name}</h3>
              <p className="award-by">By {award.by}</p>
              <p className="award-date">Date Issued: {award.date}</p>
              <a href={award.link} className="award-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
