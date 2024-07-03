import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchedDonatorDeets, deleteDonator, donDetails, postProjects } from '../../utils/API-routes';
import { UserContext } from '../context/UserContext';
import Loading from '../securit/loading';


export default function AddProjects() {
    const { token } = useContext(UserContext);
    const [donateDetails,setDonDetails] = useState([]);
    const [searchBar,setSearchBar] = useState('');
    const [loading,setLoading] = useState(false);
    const [loading2,setLoading2] = useState(false);
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

        setLoading(true);

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
                    setLoading(false);
                    console.log('Project added successfully:', response.data);
                    alert('project added!');

                } else {
                    setLoading(false);
                    console.log('No data returned');
                }
            } catch (error) {
                setLoading(false);
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
        setLoading2(true);
        try{
            
            const response = await axios.get(SearchedDonatorDeets(value));

            if(response.data.status){
                setDonDetails(response.data.donator);
                setLoading2(false);
            }
            else{
                console.log('error fetching');
                setLoading2(false);
            }
        }catch(error){
            console.log('error',error);
            setLoading(false);
        }
    }
   
    const handleDownload = ()=>{
        const csvContent = "data:text/csv;charset=utf-8," 
            + ["FirstName,LastName,Email,Phone,Time,Amount", 
                ...donateDetails.map(d => 
                    `${d.firstname},${d.lastname},${d.email},${d.phone_number},${d.time},${d.amount}`
                )
            ].join("\n");

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "donor_details.csv");
            document.body.appendChild(link);
    
            link.click();
    }

    const handleDelete = async(id)=>{
        try{
        const response = await axios.delete(deleteDonator(id),{
            "headers":{
                'Authorization':`Bearer ${token}`
            }
        });
         
        if(response.data){
            setDonDetails((prevDetails) => prevDetails.filter(donor => donor._id !== id));
        }
    }catch(error){
        console.log('error',error);
    }
    }

    return (
        <div className='add-Container'>
            {loading ? <nav className='fe'><Loading/></nav> : (
                <form className='proadd' onSubmit={handleSubmit}>
                <h1>Add Projects </h1><br/>
            <label className='fields'>Title: </label>
            <input type="text" name="title" onChange={handleChange} /><br /><br />
            <label className='fields'>Description: </label>
                <textarea name="description" rows = "15" cols= "50" onChange={handleChange}></textarea><br /><br />
                <button type="submit">Submit</button>
            </form>)}<br></br>
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
                    {loading2 ? <Loading/>:(donateDetails.map((donator,index)=>(
                        <tr key={index}>
                            <td>{donator.firstname}</td>
                            <td>{donator.lastname}</td>
                            <td>{donator.email}</td>
                            <td>{donator.phone_number}</td>
                            <td>{donator.time}</td>
                            <td>{donator.amount}</td>
                            <td><button onClick = {()=>handleDelete(donator._id)}>Delete</button></td>
                        </tr>)
                    ))}
                </tbody>
               </table>
           </div>
         <button className='download' onClick={handleDownload}>Download in csv</button>
        </div>
    );
}
