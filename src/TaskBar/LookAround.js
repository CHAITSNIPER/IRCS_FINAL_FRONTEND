import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../all.css';
import ircs from './ircs.png';
export default function LookAround() {
    const location = useLocation();
  
  return (
    <div className="headings">
      <Link className="imageTo" to="/">
        <img src={ircs} alt="IRCS" className="logo" />
      </Link>
      <Link className={location.pathname==='/'?'clicked':'unclicked'} to="/">Home</Link> 
      <Link className={location.pathname==='/aboutIRCS'?'clicked':'unclicked'} to="/aboutIRCS">About</Link> 
      <Link className={location.pathname==='/donateIRCS'?'clicked':'unclicked'} to="/donateIRCS">Donate</Link>
    </div>
  )
}
