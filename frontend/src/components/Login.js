import React from "react";
import { Link } from "react-router-dom";
import logo1 from "./images/logo1.png";
import "./Auth.css";

const Login = () => {
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
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="/">
              <button type="button" className="login-btn">
                Login
              </button>
            </Link>
          </div>
        </div>
        <div className="signup">
          <div className="header">New Here?</div>
          <div className="para">Create a new account and enjoy shopping!</div>
          <Link to="/signup">
            <button type="button" className="signup-btn">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
