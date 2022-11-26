import React from "react";
import { Link } from "react-router-dom";
import logo1 from "./images/logo1.png";
import "./Auth.css";

const Signup = () => {
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
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <Link to="/">
              <button type="button" className="login-btn">
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
