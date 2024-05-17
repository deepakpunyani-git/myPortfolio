import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

const App = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [AboutMeData, setAboutMeData] = useState({ about: {}, links: [] });
  const [ExperienceData, setExperienceData] = useState([]);
  const [EducationData, setEducationData] = useState([]);
  const [SkillsData, setSkillsData] = useState([]);
  const [AwardsData, setAwardsData] = useState([]);
  const [ProjectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setAboutMeData({ about: data.about, links: data.links });
        setEducationData(data.education);
        setExperienceData(data.experience);
        setSkillsData(data.skills);
        setAwardsData(data.awards);
        setProjectsData(data.projects);

      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Sidebar data={AboutMeData.about} />
      <div className="container-fluid p-0">
        <AboutMe data={AboutMeData.about} links={AboutMeData.links} />
        <Experience data={ExperienceData} />
        <Education data={EducationData} />
        <Skills data={SkillsData} />
        <Awards data={AwardsData} />
        <Projects data={ProjectsData} />
        <ContactForm/>
      </div>
    </div>
  );
};

export default App;
