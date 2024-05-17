import React from 'react';

const Experience = ({ data }) => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
      <div className="my-auto">
        <h2 className="mb-5">Experience</h2>
        {data.map((company, companyIndex) => (
          <div key={companyIndex} className="mb-5">
            <h3 className="mb-3">{company.company}</h3>
            {company.roles.map((role, roleIndex) => (
              <div key={role._id} className="mb-3">
                <h4 className='subheading'>
                  {role.title} <span className="text-primary">({role.monthAndYear})</span>
                </h4>
                <p>{role.details}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
