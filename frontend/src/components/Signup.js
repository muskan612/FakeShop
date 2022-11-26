import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo1 from "./images/logo1.png";
import "./Auth.css";
import { hashSync } from "bcryptjs";

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confpassword, setConfPassword] = useState('')

  const HandleSignup = async (e) => {
    e.preventDefault();
    var hashedPass = hashSync(password, 10)
    console.log(hashedPass)
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        'email': email,
        'password': hashedPass
      })
    })
      .then((response) => {
        console.log(response.body)
        // document.getElementById('regForm').reset()
      })
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
          <div className="header">Create Your Account</div>
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
            <input type="password" id='confpassword'
              name='confpassword'
              value={confpassword}
              required={true}
              onChange={(e) => setConfPassword(e.target.value)}
              placeholder="Confirm Password" />
            <Link to="/">
              <button type="button" className="login-btn" onClick={HandleSignup}>
                Sign up
              </button>
            </Link>
          </div>
        </div>
        <div className="signup">
          <div className="header">Already a user?</div>
          <div className="para">Login and continue shopping!</div>
          <Link to="/login">
            <button type="button" className="signup-btn">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
