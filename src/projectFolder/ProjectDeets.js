import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../all.css';
import { getSelectedProject } from '../utils/API-routes';

export default function ProjectDeets() {
    const [project, setProject] = useState(null);
    const { _id } = useParams();

    const fetchProject = async () => {
        try {
            const response = await axios.get(getSelectedProject(_id));
            if (response.data && response.data.project) {
                setProject(response.data.project);
            } else {
                console.log('Project not found');
            }
        } catch (error) {
            console.error('Error fetching project:', error);
        }
    };

    useEffect(() => {
        fetchProject();
    }, [_id]);

    if (!project) return <div>Loading...</div>; // Display a loading indicator while fetching data


    
        const formatDesc = (description)=>{
            return description.split('\n').map((line,index)=>(
                <React.Fragment key={index}>
                    {line}
                    <br/>
                </React.Fragment>
            ));
        }
    

    return (
        <div className='Project-details'>
            <h1>{project.title}</h1>
            <br /><br />
            <p>{formatDesc(project.description)}</p>
        </div>
    );
}