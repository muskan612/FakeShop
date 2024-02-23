import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

const DropDown = () => {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();
  return (
    <div className="navigation-bar">
      <Link to="/" className="others nav home">
        Home
      </Link>
      {/* <Link to="/login" className="auth nav right">
        Login/Signup
      </Link> */}

      {!isAuthenticated && (
        <div className="auth nav right" onClick={() => loginWithRedirect()}>
          Log In
        </div>
      )}

      {/* <Link to="/services" className="others nav right">
        Services
      </Link> */}
      <Link to="/products" className="others nav right">
        Products
      </Link>
    </div>
  );
};

export default DropDown;
