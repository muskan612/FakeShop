import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";

const DropDownProfile = () => {
  const { user, logout } = useAuth0();
  return (
    <div className="dropdownprofile">
      <div className="email">
        <h5
          className="profile-item"
          style={{ cursor: "context-menu", fontSize: "12px" }}
        >
          {user.email}
        </h5>
      </div>
      <div
        className="profile-item"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </div>
    </div>
  );
};

export default DropDownProfile;
