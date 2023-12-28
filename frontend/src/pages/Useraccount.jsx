import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';
import './CSS/Useraccount.css'

const UserAccount = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the currently logged-in user
        const user = auth.currentUser;

        if (user) {
          // Fetch user data from Firestore based on UID
          const userDoc = await getDoc(doc(firestore, 'users', user.uid));

          if (userDoc.exists()) {
            // Set user data in state
            setUserData(userDoc.data());
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); // Run this effect only once when the component mounts

  return (
    <div>
      <h2>User Account</h2>
      {userData ? (
        <div className='main-div'>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Age: {userData.age}</p>
          <p>Gender: {userData.gender}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserAccount;
