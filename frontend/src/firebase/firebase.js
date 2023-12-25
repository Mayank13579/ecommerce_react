import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {

  apiKey: "AIzaSyBXgx9ihV7BeLFwEhleH0gThSRYD9crkBc",
    authDomain: "ecommerce-react-a1ea5.firebaseapp.com",
    projectId: "ecommerce-react-a1ea5",
    storageBucket: "ecommerce-react-a1ea5.appspot.com",
    messagingSenderId: "652901800165",
    appId: "1:652901800165:web:a97f3aa30b6c7e11619c0c",
    measurementId: "G-5YQFMCCZQK"
  // ...
};
console.log('Firebase Configuration:', firebaseConfig);
// ... other logging statements

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = firebase.auth();
