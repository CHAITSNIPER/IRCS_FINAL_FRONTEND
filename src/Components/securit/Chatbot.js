import axios from 'axios';
import React, { useState } from 'react';
import { messageHandler } from '../../utils/API-routes';

export default function Chatbot() {
    const [message, setMessage] = useState('');
    const [messageArr, setMessageArr] = useState([]);

    const handleChange = (e) => {
        setMessage(e.target.value);
    };
    
    const AIHandler = async(message) => {
         try{
             const response = await axios.post(messageHandler,{
                message
             })

             if(response.data){
                if (message.trim().length > 0) {
                    setMessageArr([...messageArr, { usertype: 'sender', message }, { usertype: 'receiver', message: response.data.response }]);
                    setMessage(''); 
                } else {
                    alert('Message length should be greater than 0');
                }
             }
         }catch(error){
            console.log('error',error);
         }
    }
    const handleSend = (e) => {
        e.preventDefault();
        AIHandler(message);
    };

    return (
        <div className='chatWindow'>
            <div className='textsWindow'>
                {messageArr.map((msg, index) => (
                    <nav key={index} className={`message ${msg.usertype === 'sender' ? 'sender' : 'receiver'}`}>
                        {msg.message}
                    </nav>
                ))}
            </div>
            <div className='inputWindow'>
                <input
                    className='aiInput'
                    type='text'
                    name='message'
                    value={message}
                    onChange={handleChange}
                    placeholder='Ask our AI'
                />
                <button className='sendButton' onClick={handleSend}>Send</button>
            </div>
        </div>
    );
}