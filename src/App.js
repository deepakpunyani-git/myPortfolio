import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Awards from './components/Awards';

const App = () => {

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [AboutMeData, setAboutMeData] = useState([]);
  const [ExperienceData, setExperienceData] = useState([]);
  const [EducationData, setEducationData] = useState([]);
  const [SkillsData, setSkillsData] = useState([]);
  const [AwardsData, setAwardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setAboutMeData(data.about);
        setEducationData(data.education);
        setExperienceData(data.experience);
        setSkillsData(data.skills);
        setAwardsData(data.awards);

      } catch (error) {
        console.error('Error fetching experience data:', error.message);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <Sidebar data={AboutMeData} />
      <div className="container-fluid p-0">
        <AboutMe data={AboutMeData} />
        <Experience data={ExperienceData} />
        <Education data={EducationData} />
        <Skills data={SkillsData} />
        <Awards data={AwardsData} />
      </div>
    </div>
  );
};

export default App;
