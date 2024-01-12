import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyBXgx9ihV7BeLFwEhleH0gThSRYD9crkBc",
    authDomain: "ecommerce-react-a1ea5.firebaseapp.com",
    projectId: "ecommerce-react-a1ea5",
    storageBucket: "ecommerce-react-a1ea5.appspot.com",
    messagingSenderId: "652901800165",
    appId: "1:652901800165:web:a97f3aa30b6c7e11619c0c",
    measurementId: "G-5YQFMCCZQK"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = firebase.auth();
export const firestore =firebase.firestore();
