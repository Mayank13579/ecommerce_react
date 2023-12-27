// // Import necessary libraries and dependencies
// import React, { useEffect, useState } from 'react';
// import { firestore, auth } from '../firebase/firebase';

// // Create a User Profile component
// const UserProfile = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Check if there is a logged-in user
//     const user = auth.currentUser;

//     if (user) {
//       // If the user is logged in, fetch user data from Firestore
//       const fetchUserData = async () => {
//         try {
//           const userDoc = await firestore.collection('users').doc(user.uid).get();
//           if (userDoc.exists) {
//             setUserData(userDoc.data());
//           } else {
//             console.error('User document does not exist.');
//           }
//         } catch (error) {
//           console.error('Error fetching user data:', error.message);
//         }
//       };

//       fetchUserData();
//     } else {
//       // Handle the case where there is no logged-in user
//       console.error('No user is logged in.');
//     }
//   }, []); // Empty dependency array ensures this effect runs only once when the component mounts

//   // Render the user profile information
//   return (
//     <div>
//       <h1>User Profile</h1>
//       {userData ? (
//         <>
//           <p>Name: {userData.name}</p>
//           <p>Email: {userData.email}</p>
//           {/* Add more fields as needed */}
//         </>
//       ) : (
//         <p>Loading user data...</p>
//       )}
//     </div>
//   );
// };

// export default UserProfile;
