// src/components/AboutMe.js
import React from 'react';

const AboutMe= (props) => {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">{props.data.firstName} 
            <span className="text-primary"> {props.data.lastName}</span>
          </h1>
          {/* <div className="subheading mb-5">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
            <a href="mailto:name@email.com">name@email.com</a>
          </div> */}
          <p className="mb-5">{props.data.details}</p>
          <ul className="list-inline list-social-icons mb-0">
            {/* Add your social media icons here */}
          </ul>
        </div>
      </section>
    );
  };

export default AboutMe;
