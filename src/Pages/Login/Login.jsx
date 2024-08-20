import React from 'react'
import "./login.css";

const Login = () => {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">XSocial</h3>
            <span className="loginDesc">
                XSocial helps you connect and share with the people in your life.
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder='Email address or phone number' className='loginInput'/>
                <input placeholder='Password' className='loginInput'/>
                <button className="loginBtn">Log In</button>
                <span className="loginForgot">Forgotten password?</span>
                <button className="loginRegisterBtn">Create a new account</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
