import React from 'react';
import { useNavigate } from 'react-router-dom';
import jkfloods from './images/jkfloods.png';
import './project.css';

export default function KashFlood() {
  const navigate = useNavigate();
  return (
    <div>
      <button className='goBack' onClick={()=>{navigate('/ourProjects')}}>Go Back</button>
    <div className="container">
       
      <div className="card">
      <img src={jkfloods} className='imageInProj'/>
      <h1 className='header'>JAMMU & KASHMIR FLOODS</h1>
      <p className='para'>In respone to Bombay city Red Cross appeal for victims 
        of Jammu & Kashmir Rs. 7,71,000/- were collected from which Rs. 4,73,000/- 
        was spent in procuring the much needed relief supplies requested for by the Kashmir 
        Red Cross Unit namely 2000 blankets, 50000 face masks ,25000 examination gloves and 174 
        towels. In addition, educational request was given priority by sending 2500 note books & 
        education accessories such as rubbers, pencils, slates, slate pencils & scales.</p>
        </div>
    </div>
    </div>
  )
}
