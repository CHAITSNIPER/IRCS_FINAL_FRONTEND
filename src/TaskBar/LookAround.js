import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ig_icon from '../Components/images/instagram-icon.png';
import ircs from '../Components/images/logo.png';
import '../all.css';
export default function LookAround() {
    const location = useLocation();
  
  return (
    <div className="headings">
      <Link className="imageTo" to="/">
        <img src={ircs} alt="IRCS" className="logo" />
      </Link>
      <Link className={location.pathname==='/'?'clicked':'unclicked'} to="/">Home</Link> 
      <Link className={location.pathname==='/aboutIRCS'?'clicked':'unclicked'} to="/aboutIRCS">About</Link> 
      <Link className={location.pathname==='/ourProjects'?'clicked':'unclicked'} to="/ourProjects">Projects</Link>
      <Link className={location.pathname==='/donateIRCS'?'clicked':'unclicked'} to="/donateIRCS">Donate</Link>
      <Link className='iconIg' to ="https://www.instagram.com/ircsmumbai/"><img src = {ig_icon} alt='ig' className='igIcon'/></Link>
    </div>
  )
}
