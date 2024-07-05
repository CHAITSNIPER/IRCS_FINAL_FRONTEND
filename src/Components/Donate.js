import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import '../donate.css';
import { postDonators } from '../utils/API-routes';
import { UserContext } from './context/UserContext';


export default function Donate() {

  const [values,setValues] = useState({});
  const [errorNote,setErrorNote] = useState('');
  const { token } = useContext(UserContext);
  let time = Date();

  useEffect(()=>{
    localStorage.removeItem('token');
   },[]);
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setValues({...values,[name]:value});
  }

  const handleValidator=()=>{
    const {firstname,lastname,email,phone_number,city,state,amount} = values;

    if (phone_number > 9999999999 || phone_number < 1000000000) {
      setErrorNote('phone number has to be 10 digits');
      return false;
    }  
    if (typeof firstname !== 'string' || firstname.length <= 0) {
      setErrorNote('firstName cannot be empty');
      return false;
    }
    if (typeof lastname !== 'string' || lastname.length <= 0) {
      setErrorNote('lastName cannot be empty');
      return false;
    }
    if (amount <= 0) {
      setErrorNote('amount has to be greater than 0');
      return false;
    }
  
    return true;
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const {firstname,lastname,email,phone_number,city,state,amount} = values;
     
    if(handleValidator()){
     try{
      const response = await axios.post(postDonators,{
          firstname,lastname,email,phone_number,city,state,amount
      })
      if(response.data){
        setErrorNote('');
         setValues(response.data);
         
         alert('form Submitted');
      }
      else{
        console.log('error');
      }

     }catch(error){
         console.log('error',error);
         
     }



  }else{
    alert('form not submitted');
  }
}
  return (
    <div>
      <form className="donationForm" onSubmit={handleSubmit}>
        <h1>DONATIONS</h1><br/>
        <p>Fill the form below</p><br/>
          <nav>First Name: </nav> <input className='donInputs' type="text" name="firstname" onChange={handleChange}/><br></br><br/>
          <nav>Last Name: </nav> <input className='donInputs' type="text" name="lastname" onChange={handleChange}/><br></br><br/>
          <nav>Email: </nav> <input className='donInputs' type="email" name="email" onChange={handleChange}/><br></br><br/>
          <nav>Phone Number: </nav> <input className='donInputs' type="number" name="phone_number" onChange={handleChange}/><br/><br/>
          <nav>City: </nav> <input className='donInputs' type="text" name="city" onChange={handleChange}/><br></br><br/>
          <nav>State: </nav> <input className='donInputs' type="text" name="state" onChange={handleChange}/><br></br><br/>
          <nav>Amount you want to donate{`(in INR)`}:</nav> <input className='number' name="amount" onChange={handleChange}/><br/><br/>
          <button className='donate-submit'type="submit">Submit</button><br></br>
          <nav className='error'>{errorNote}</nav>
      </form>
    </div>
  )
}
