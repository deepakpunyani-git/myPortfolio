import React from 'react';

const Projects = ({ data }) => {
  return (
    <section className="resume-section" id="projects">
      <div className="resume-section-content">
        <h2 className="mb-5">Projects</h2>
        {data.map((project, index) => (
          <div key={index} className="mb-3">
            <h3>{project.title}</h3>
            {project.link && (
              <p>
                <strong>Project Link:</strong>{' '}
                <a href={project['link']} target="_blank" rel="noopener noreferrer">
                  {project['link']}
                </a>
              </p>
            )}
            {project['git-link'] && (
              <p>
                <strong>GitHub Link:</strong>{' '}
                <a href={project['git-link']} target="_blank" rel="noopener noreferrer">
                  {project['git-link']}
                </a>
              </p>
            )}
            <p>{project.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
