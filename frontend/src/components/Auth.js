import React from "react";
import { Link } from "react-router-dom";
import logo1 from "./images/logo1.png";
import "./Auth.css";
import { useState } from "react";
const {hashSync} = require('bcryptjs')

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const HandleLogin = async (e) => {
    e.preventDefault();
    var hashedPass = hashSync(password,10)
    console.log(hashedPass)
    fetch('http://localhost:5000/login',{
      method:'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body:JSON.stringify({
        'email' : email,
        'password' : hashedPass
      })
    })
    .then((response)=>{
      console.log(response.body)
      // document.getElementById('regForm').reset()
    })
  }

  const HandleSignup = () => {

  }
  return (
    <>
      <Link to="/">
        <img src={logo1} alt="" />
        <div
          style={{ position: "absolute", top: "40px", left: "90px" }}
          className="logo"
        >
          Fakeshop Inc.
        </div>
      </Link>
      <div className="authorize">
        <div className="login">
          <div className="header">Login To Your Account</div>
          <div className="fields">
            <input type="text" id='email'
              name='email'
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email" />
            <input type="password"
              id='password'
              name='password'
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" />
            <button type="button" className="login-btn" onClick={HandleLogin}>
              Login
            </button>
          </div>
        </div>
        <div className="signup">
          <div className="header">New Here?</div>
          <div className="para">Create a new account and enjoy shopping!</div>
          <button type="button" className="signup-btn" onClick={HandleSignup}>
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;