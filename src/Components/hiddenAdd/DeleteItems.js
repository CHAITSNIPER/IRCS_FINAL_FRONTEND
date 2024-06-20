import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeleteProject, getAllProjects } from '../../utils/API-routes';
import { UserContext } from '../context/UserContext';

export default function DeleteItems() {
    const [projs,getProjs] = useState([]);
    const { token } = useContext(UserContext);
    const navigate=useNavigate();
    if(!token){
        navigate('/login');
    }
    const fetchProjects = async()=>{
        try{
        const response = await axios.get(getAllProjects);
        if(response.data){
            getProjs(response.data.project);
        }
        else{
            console.log(`couldn't fetch projects`);
        }
    }catch(error){
        console.log('error ',error);
    }
    }

    const handleDelete = async(id)=>{
        try{
            const response = await axios.delete(DeleteProject(id),{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            });
            if(response.data.status){
                console.log('item deleted success');
                getProjs(projs.filter(proj => proj._id !== id));
            }
            else{
                console.log('item not deleted');
            }
        }
        catch(error){
            console.log('error',error);
        }
    }

    useEffect(()=>{
        fetchProjects();
    },[]);
  return (
    <div className='deletes'>
       {projs.map((projects,index)=>(
         <nav key={index}>{projects.title}<button onClick={()=>handleDelete(projects._id)}>Delete</button><br></br></nav>
       ))}
    </div>
  )
}

