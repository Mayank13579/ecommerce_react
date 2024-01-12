import React, { useState } from 'react';
import './NewsLetter.css';
import firebase from 'firebase/compat/app';  

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const emailSave = async (e) => {
    e.preventDefault();

    const db = firebase.firestore();

    db.collection("newsletter").add({
      email: email
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
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
  );
};

export default NewsLetter;
