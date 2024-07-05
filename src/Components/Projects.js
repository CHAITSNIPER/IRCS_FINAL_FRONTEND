import React from 'react';
import { useNavigate } from 'react-router-dom';
import jk from './images/jnk.jpg';
import hunger from './images/malnutrition.jpeg';
import toilet from './images/toilets.jpeg';
import water from './images/water.jpg';
import './projects.css';

const projectData = [
  { title: "JAMMU & KASHMIR FLOODS", date: "30 January", image: jk, data: 'INR 4,73,000/- was spent in procuring the much needed relief supplies requested for by the Kashmir Red Cross Unit' },
  { title: "DRINKING WATER SUPPLY SCHEME", date: "24 March", image: water, data: 'Before the water supply project, the women folk used to waste 4-5 hours every day in fetching water. Now women will be able to save the time and energy and utilize the same for productive purpose.' },
  { title: "RURAL DEVELOPMENT PROJECTS", date: "7 April", image: toilet, data: 'With a population of 256 consisting of 45 families of landless laborers and construction site workers, this village faces acute water shortage which has adversely affected sanitation and hygiene in the village.' },
  { title: "Action Against Hunger/MALNUTRITION", date: "14 April", image: hunger, data: 'A well balanced diet of proteins, carbo-hydrates etc. is prepared and fed as mid-day meal along with health supplements. Health supplements for children upto 3 years of age.' },
  // Add more project objects as needed
];

export const Projects = () => {
  
  const navigate = useNavigate();

  const handleClick=(index)=>{
     navigate(`${index}`);
  }
  return (
    <div className="projects-container">
      <header className="projects-header">
        <h1>Our Projects</h1>
        <p>Explore our ongoing initiatives and campaigns</p>
      </header>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card" onClick = {()=>handleClick(index)}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.data}</p>
            <p>{project.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

//JAMMU & KASHMIR FLOODS
//INR 4,73,000/- was spent in procuring the much needed relief supplies requested for by the Kashmir Red Cross Unit