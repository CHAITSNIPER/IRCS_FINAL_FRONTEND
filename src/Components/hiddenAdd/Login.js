import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../all.css';
import { authorizeUser } from '../../utils/API-routes';
import { UserContext } from '../context/UserContext';
import Loading from '../securit/loading';

export default function Login() {
    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);
    const [values,setValues] = useState({});
    const [loading, setLoading] = useState(false);
    const handleSubmit = async(e)=>{
        e.preventDefault();
         setLoading(true);
         const {username,password} = values
        try{
            const response = await axios.post(authorizeUser,{
                username,password
            })

            if(response.data.status===false){
                alert('error in authorizing');
                console.log('error in authorizing');
                setLoading(false);
            }
            else{
                console.log('logged admin');
                setToken(response.data.token);
                navigate('/afterLogin');
                setLoading(false);
            }
            
        }catch(error){
            setLoading(false);
            console.log('error in authorization',error);
        }
    }
    const handleChange=(e)=>{
      const name = e.target.name;
      const value = e.target.value;

      setValues({...values,[name]:value});
    }
  return (
    <div>
            {loading ? (
                <nav className='fe'><Loading /></nav> // Render the Loading component when loading state is true
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>UserName: </label> <input type="text" name="username" onChange={handleChange} /><br /><br />
                    <label>Password:</label> <input type="password" name="password" onChange={handleChange} /><br /><br />
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
  )
}
