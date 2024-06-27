import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authorizeUser } from '../../utils/API-routes';
import { UserContext } from '../context/UserContext';
import Loading from '../securit/loading';
import './hidden.css';

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
    <div className="login-container">
    {loading ? (
      <nav className='fe'><Loading /></nav>
    ) : (
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Welcome</h2>
        <div className="input-group">
          <input type="text" name="username" id="username" onChange={handleChange} required />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-group">
          <input type="password" name="password" id="password" onChange={handleChange} required />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" className="submit-btn">Log In</button>
      </form>
    )}
  </div>
  )
}
