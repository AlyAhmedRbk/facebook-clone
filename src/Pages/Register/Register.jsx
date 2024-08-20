import React from 'react'
import "./register.css";

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
                <input placeholder='Username' className='loginInput'/>
                <input placeholder='Email' className='loginInput'/>
                <input placeholder='Password' className='loginInput'/>
                <input placeholder='Confirm Password' className='loginInput'/>
                <button className="loginBtn">Register</button>
                <hr />
                <button className="loginRegisterBtn">Log In to account!</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
