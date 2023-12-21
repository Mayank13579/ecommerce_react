import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const emailSave = async () => {
    try {
      // Make a POST request to your backend endpoint
      const response = await fetch('http://localhost:3000/api/save-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        console.log('Email saved successfully');
      } else {
        console.error('Failed to save email');
      }
    } 
    
    catch (error) {
      console.error('Error saving email:', error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="newsletter">
        <h1>Get exclusive offers on your email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
          <input
            type="email"
            placeholder="your email id"
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={emailSave}>Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
