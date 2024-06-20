import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../all.css'
import { getAllProjects } from '../utils/API-routes'
import { UserContext } from './context/UserContext'
import blood from './images/bloodDon.png'
import floodR from './images/floodR.png'
import map from './images/map.png'


export default function Home() {
  const mapLink = `https://www.google.com/maps/place/Indian+Red+Cross+Society+-+Mumbai/@18.9752117,72.8238875,15z/data=!4m6!3m5!1s0x3be7ce5e060702c3:0x20c37cd578dbf1a8!8m2!3d18.9752117!4d72.8238875!16s%2Fg%2F11gdcyt4yd?entry=ttu`

   const array  = [blood,floodR];
   const { token } = useContext(UserContext);
   const navigate = useNavigate();
   const [currentIndex,setCurrentIndex] = useState(0);
   const [slideDirection,setSlideDirection] = useState('slide-left');
   const [projects,setProjects]=useState([])

   useEffect(()=>{
    const fetchProjs = async()=>{
      try{
        const response  = await axios.get(getAllProjects);
        if(response.data){
          
          setProjects(response.data.project);
        }
        else{
          console.log('data');
          
        }
      }catch(error){
        console.log('error',error);
      }
    }
    fetchProjs();
   },[]);

   useEffect(()=>{
    localStorage.removeItem('token');
   },[]);
   
   useEffect(()=>{
    const intervalId = setInterval(()=>{
        setSlideDirection('slide-left');
        setCurrentIndex((prevIndex)=>(prevIndex+1)%array.length);
       
    },4000);

    return ()=> clearInterval(intervalId);
   },[array.length]);

  return (
    <div style={{ minHeight: '120vh' }}>
       <section className="slideShow-container">
           <img src={array[currentIndex]} alt="slideshow" className="image-slide" />
       </section>
       
       <section className='quote'>"YOUR<nav className='highl'>VOLUNTARY CONTRIBUTIONS</nav> WILL <nav className='highl'>STRENGTHEN</nav>THE ORGANIZATION AND SUPPORT THE ACTIVITIES OF<nav className='highl'>RED CROSS"</nav></section>
    

    <section className="projects">
      <h1>OUR PROJECTS</h1>
         <section className="projectArray">
              {projects.map((items,index)=>(
                   <nav key = {index} className="eachProj">
               <button className='ProjectButtons' onClick={()=>{navigate(`/projects/${items._id}`)}}>{items.title}</button>
                  </nav>
       ))}
      </section>
    </section>

    <section className="donate">
       <h1>MAKE A DIFFERENCE TODAY</h1>
       <p>Your donation will help build more businesses that 
        serve the needy. Simply click on the button below to 
        donate online.</p>
        <button className='donateButton' onClick={()=>{navigate('/donateIRCS')}}>DONATE NOW</button>
    </section>
    <section className='map'>
    <Link to={mapLink}><img src = {map} alt="maptoIRCS" className="IRCSMAP"/></Link><br></br>
    <h1>Indian Red Cross Society - Mumbai</h1><br></br>
    <p>AWMH, 8th floor, 1877, Dr. Anandrao Nair Marg,<br></br>
Red Cross Street, Mumbai Central (East), Mumbai - 400011<br></br>
  Tel: 022-2309-6979</p>
  <nav>Email: info@ircsmumbai.org</nav>

    <br></br>
    </section>
    
    </div>
  )
}
