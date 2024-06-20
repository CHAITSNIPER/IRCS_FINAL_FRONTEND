import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../all.css';
import { UserContext } from '../context/UserContext';

function AddorDelete() {
    
    const { token } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(()=>{
     if(!token) navigate('/login');
    },[])    
  return (
    <div>
      <button className='adminToggle' onClick={()=>{navigate('/Pathtoprojs')}}>ProjectDetails and donateList</button><br/><br/>
      <button className='adminToggle2' onClick={()=>{navigate('/deleteStuff')}}>DeleteItems</button>
      
    </div>
  )
}

export default AddorDelete
