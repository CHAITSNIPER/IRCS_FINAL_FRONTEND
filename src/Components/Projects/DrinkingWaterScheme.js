import React from 'react';
import { useNavigate } from 'react-router-dom';
import drws from './images/drws.png';
import './project.css';

export default function DrinkingWaterScheme() {
  const navigate = useNavigate();
  return (
    <div>
       <button className='goBack' onClick={()=>{navigate('/ourProjects')}}>Go Back</button>
    <div className="container">
      
      <div className="card">
        <img src= {drws} className='imageInProj'/>
        <h1 className="header">A TRIBAL VILLAGE IN PANVEL</h1>
        <p className="para">
          A greater section of our Indian population is still deprived of basic amenities which is the fundamental right of every Indian human being. It is shocking to know even today that 800 million Indians do not have access to clean drinking water. Despite Government plans and efforts in this direction, the current scenario is very dismal.
        </p>
        <p className="para">
          Thus, it is the objective of NGOs like us to provide drinking water in the villages. The Balwantrai Centre selected those villages which had a population less than 3000, where government help for drinking water was not available. Women have to walk several miles daily to collect water. Agriculture is the main occupation. The crops depend entirely on the monsoon.
        </p>
        <p className="para">
          The drinking water project has served as a stepping stone in the overall development process of the village. Before the water supply project, the women folk used to waste 4-5 hours every day in fetching water. Now women will be able to save the time and energy and utilize the same for productive purpose. Farmers will be able to grow the crop throughout the year. Lift irrigation schemes can also be provided, besides, providing skills for organic farming for the benefit of farmers.
        </p>
        <h2 className="sub-header">Drinking Water provided in the following villages –</h2>
        <ul className="village-list">
          <li>Babdevwadi</li>
          <li>Pimpalwadi</li>
          <li>Mahalungi Chindran High School</li>
          <li>Khairwadi</li>
          <li>Khanavale</li>
          <li>Shiravli</li>
          <li>Shivansai Primary School</li>
          <li>Chanchavali</li>
        </ul>
        <p className="para">
          Indian Red Cross Society Bombay City Branch has done a wonderful job in providing this basic amenity for the comfort of villagers.
        </p>
      </div>
    </div>
    </div>
  );
}

