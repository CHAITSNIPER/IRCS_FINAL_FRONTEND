import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchedDonatorDeets, donDetails, postProjects } from '../../utils/API-routes';
import { UserContext } from '../context/UserContext';


export default function AddProjects() {
    const { token } = useContext(UserContext);
    const [donateDetails,setDonDetails] = useState([]);
    const [searchBar,setSearchBar] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        if(!token) navigate('/login');
    })
    const [inputs, setInputs] = useState({
        title: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const validate = () => {
        const { title, description } = inputs;
        if (title.length <= 0 || description.length <= 0) return false;
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            const { title, description } = inputs;
            try {
                const response = await axios.post(postProjects, {
                    title,
                    description
                },{
                 headers:{
                    'Authorization':`Bearer ${token}`
                 }
                });

                if (response.data) {
                    console.log('Project added successfully:', response.data);
                    alert('project added!');
                } else {
                    console.log('No data returned');
                }
            } catch (error) {
                console.error('Error adding project:', error);
            }
        } else {
            console.log('Validation failed');
        }
    };
    const fetchDeets = async()=>{
        try{
            const response = await axios.get(donDetails);

            if(response.data){
                setDonDetails(response.data.donator);
                
            }
            else{
                console.log('no Data');
            }
        }catch(error){
            console.log('error',error);
        }
    }

    useEffect(()=>{
        fetchDeets();
    },[]);

    const handleSearchBar = async(e)=>{
        const value = e.target.value;
        if(value.length === 0){
            fetchDeets();
            return;
        }
        try{
            
            const response = await axios.get(SearchedDonatorDeets(value));

            if(response.data.status){
                setDonDetails(response.data.donator);
            }
            else{
                console.log('error fetching');
            }
        }catch(error){
            console.log('error',error);
        }
    }
   

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add Projects </h1>
            <label>Title: </label>
            <input type="text" name="title" onChange={handleChange} /><br /><br />
            <label>Description: </label>
                <textarea name="description" rows = "15" cols= "15" onChange={handleChange}></textarea><br /><br />
                <button type="submit">Submit</button>
            </form><br></br>
           <div className='dondets'>
            <h1>Donators details</h1>
            <input type="text" className = "searchDon" onChange={handleSearchBar} placeholder='search donator'/>
            <table>
                <thead>
                    <tr>
                        <th>FirstName</th><th>LastName</th><th>Email</th><th>Phone</th><th>Time</th><th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {donateDetails.map((donator,index)=>(
                        <tr key={index}>
                            <td>{donator.firstname}</td>
                            <td>{donator.lastname}</td>
                            <td>{donator.email}</td>
                            <td>{donator.phone_number}</td>
                            <td>{donator.time}</td>
                            <td>{donator.amount}</td>
                        </tr>
                    ))}
                </tbody>
               </table>
           </div>

        </div>
    );
}
