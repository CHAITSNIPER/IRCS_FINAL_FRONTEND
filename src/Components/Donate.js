import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import '../donate.css';
import { postDonators } from '../utils/API-routes';
import { UserContext } from './context/UserContext';
import pic from './images/about.jpg'

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
    
    <div className="donate-page">
      <div className='header-container'>
        <img src={pic} className='HeaderImage' alt="IRCS Mumbai Header" />
        <div className='header-text'>
          <h1>DONATE TO IRCS MUMBAI</h1>
        </div>
    </div>

      <div className="donate-content">
        <div className="why-donate">
          <h2>Why Donate to Indian Red Cross Society Mumbai?</h2>
          <ul>
            <li>Your donation supports disaster relief efforts across Mumbai and surrounding areas.</li>
            <li>We provide essential medical services to those in need, regardless of their ability to pay.</li>
            <li>IRCS Mumbai runs blood donation camps and maintains a blood bank for emergencies.</li>
            <li>We offer training in first aid and disaster preparedness to communities.</li>
            <li>Your contribution helps us maintain a network of volunteers ready to respond to crises.</li>
            <li>IRCS Mumbai supports vulnerable populations through various community health programs.</li>
            <li>We are a trusted organization with a long history of humanitarian service in Mumbai.</li>
          </ul>
          <p>Your donation, no matter how small, makes a significant impact in the lives of those we serve. Join us in our mission to alleviate human suffering and build a more resilient Mumbai.</p>
        </div>

        <div className="donation-form">
          <form className="donationForm" onSubmit={handleSubmit}>
            <h2>MAKE A DONATION</h2>
            <p>Fill the form below to contribute</p>
            <input className='donInputs' type="text" name="firstname" placeholder="First Name" onChange={handleChange}/>
            <input className='donInputs' type="text" name="lastname" placeholder="Last Name" onChange={handleChange}/>
            <input className='donInputs' type="email" name="email" placeholder="Email" onChange={handleChange}/>
            <input className='donInputs' type="tel" name="phone_number" placeholder="Phone Number" onChange={handleChange}/>
            <input className='donInputs' type="text" name="city" placeholder="City" onChange={handleChange}/>
            <input className='donInputs' type="text" name="state" placeholder="State" onChange={handleChange}/>
            <input className='donInputs' type="number" name="amount" placeholder="Amount (in INR)" onChange={handleChange}/>
            <button className='donate-submit' type="submit">DONATE NOW</button>
            <p className='error'>{errorNote}</p>
          </form>
        </div>
      </div>
    </div>
  )
}
