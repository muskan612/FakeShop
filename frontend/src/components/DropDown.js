import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const DropDown = () => {
  return (
    <div className="navigation-bar">
      <Link to="/" className="others nav home">
        Home
      </Link>
      <Link to="/auth" className="auth nav right">
        Login/Signup
      </Link>
      <Link to="/services" className="others nav right">
        Services
      </Link>
      <Link to="/products" className="others nav right">
        Products
      </Link>
    </div>
  );
};

export default DropDown;
