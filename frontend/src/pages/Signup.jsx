import React from 'react'
import'../pages/CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='your name' />
          <input type="text" placeholder='email address' />
          <input type="text" placeholder='password'/>
        </div>
        <button>continue</button>
        <p className="loginsignup-login">already have an accounr?  <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>by continuing , i agree to the terms and privacy policy</p>
        </div>

      </div>
    </div>
  )
}

export default LoginSignup