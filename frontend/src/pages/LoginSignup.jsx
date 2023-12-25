import {auth} from '../firebase/firebase';
import React, { useState } from 'react';
import '../pages/CSS/LoginSignup.css'

const LoginForm = ({ onToggleForm }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(loginData.email, loginData.password);
      console.log('Login successful!');
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <input
        type="text"
        placeholder="Email Address"
        name="email"
        value={loginData.email}
        onChange={handleLoginChange}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={loginData.password}
        onChange={handleLoginChange}
      />
      <br />
      <button type="submit">Login</button>
      <p>Need an account?<span className='shift-btn' onClick={onToggleForm}>Sign up </span> here.</p>
    </form>
  );
};

const SignupForm = ({ onToggleForm }) => {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });

  
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    // console.log(e)

    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    // Add your signup logic here using signupData
    try {
      await auth.createUserWithEmailAndPassword(signupData.email, signupData.password);
      console.log('Signup successful!');
    } catch (error) {
      console.error('Signup failed:', error.message);
    }
    // console.log('Signup submitted:', signupData);
  };

  return (
    <form onSubmit={handleSignupSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        name="name"
        value={signupData.name}
        onChange={handleSignupChange}
      />  <br />
      <input
        type="text"
        placeholder="Email Address"
        name="email"
        value={signupData.email}
        onChange={handleSignupChange}
      /> <br />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={signupData.password}
        onChange={handleSignupChange}
      /> <br />
      <button type="submit">Sign Up</button>
      <p>Already have an account? <span className='shift-btn' onClick={onToggleForm}>Login here.</span> </p>
    </form>
  );
};

const LoginSignup = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{showLogin ? 'Login' : 'Sign Up'}</h1>
        {showLogin ? <LoginForm onToggleForm={toggleForm} /> : <SignupForm onToggleForm={toggleForm} />}
      </div>
    </div>
  );
};

export default LoginSignup;
