import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Action_Against_Hunger() {

    const data = useParams();
    useEffect(()=>{
        console.log(data);
    },[]);
  return (
    <div>
      <h1>Action Against Hunger and Malnutrition</h1>
    </div>
  )
}
