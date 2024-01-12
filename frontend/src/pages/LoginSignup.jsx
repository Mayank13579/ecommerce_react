import { auth, firestore } from '../firebase/firebase';
import { getDoc, setDoc, doc, signOut } from 'firebase/firestore';
import React, { useState } from 'react';
import '../pages/CSS/LoginSignup.css';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';

const LoginForm = ({ onToggleForm, isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();

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
      const userCredential = await auth.signInWithEmailAndPassword(loginData.email, loginData.password);
      const userDoc = await getDoc(doc(firestore, 'users', userCredential.user.uid));
      window.alert('Login successful!');
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      window.alert('Wrong email or password');
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithPopup(new GoogleAuthProvider());
      console.log('Google sign-in successful', userCredential.user);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      window.alert('Wrong email or password');
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
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
        </form>
      )}

      <h1>OR</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <br />
      <p>
        Need an account?
        <span className="shift-btn" onClick={onToggleForm}>
          Sign up
        </span>{' '}
        here.
      </p>
    </>
  );
};

const SignupForm = ({ onToggleForm, isLoggedIn, handleLogout }) => {
  const Navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
  });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(signupData.email, signupData.password);

      // Save user data to Firestore
      await setDoc(doc(firestore, 'users', userCredential.user.uid), {
        name: signupData.name,
        email: signupData.email,
        age: signupData.age,
        gender: signupData.gender,
      });

      console.log('Signup successful!');
      Navigate('/');
    } catch (error) {
      console.error('Signup failed:', error.message);
      window.alert('Wrong id or password');
      Navigate('/login');
    }
  };

  const handleGoogleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithPopup(new GoogleAuthProvider());
      await setDoc(doc(firestore, 'users', userCredential.user.uid), {
        name: signupData.name,
        email: signupData.email,
      });
      console.log('Google sign-in successful', userCredential.user);
      Navigate('/');
    } catch (error) {
      console.error('Signup failed:', error);
      window.alert('Wrong id or password');
      Navigate('/login');
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <form onSubmit={handleSignupSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={signupData.name}
              onChange={handleSignupChange}
            />{' '}
            <br />
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              value={signupData.email}
              onChange={handleSignupChange}
            />{' '}
            <br />
            <input
              type="password"
              placeholder="Password (at least 6)"
              name="password"
              value={signupData.password}
              onChange={handleSignupChange}
            />
            <br />
            <input
              type="text"
              placeholder="Age"
              name="age"
              value={signupData.age}
              onChange={handleSignupChange}
            />{' '}
            <br />
            <input
              type="text"
              placeholder="Gender"
              name="gender"
              value={signupData.gender}
              onChange={handleSignupChange}
            />{' '}
            <br />

            <button type="submit">Sign Up</button>
          </form>

          <br />
          <h1>OR</h1>
          <button type="submit" onClick={handleGoogleSubmit}>
            Signup with Google
          </button>
          <br />
          <p>
            Already have an account?{' '}
            <span className="shift-btn" onClick={onToggleForm}>
              Login here.
            </span>{' '}
          </p>
        </>
      )}
    </>
  );
};

const LoginSignup = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = () => {
    setShowLogin((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setIsLoggedIn(false);
      console.log('Logout successful!');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{showLogin ? 'Login' : 'Sign Up'}</h1>
        {showLogin ? (
          <LoginForm onToggleForm={toggleForm} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        ) : (
          <SignupForm onToggleForm={toggleForm} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
