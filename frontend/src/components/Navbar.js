import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FaCartShopping } from "react-icons/fa6";
import DropDown from "./DropDown";
import { useAuth0 } from "@auth0/auth0-react";
import DropDownProfile from "./DropDownProfile";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showProfile, setShowProfile] = useState(false);

  const checkSize = () => {
    setSize(window.innerWidth);
    if (size > 520) setShowNavbar(false);
  };

  const handleDropdown = () => {
    setShowNavbar(!showNavbar);
    setShowProfile(false);
  };

  const handleProfile = () => {
    if (showNavbar) setShowNavbar(false);
    setShowProfile(!showProfile);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div className="navigation-bar profile">
        <FontAwesomeIcon
          className="bar"
          style={{ cursor: "pointer" }}
          icon={faBars}
          onClick={handleDropdown}
        />

        {showNavbar && <DropDown />}
        {size > 520 && <DropDown />}
        {/* <Link to="/cart" className="others nav right">
        </Link> */}
        {size > 520 && (
          <Link to="/cart">
            <div className="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                viewBox="0 0 576 512"
                fill="white"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              <span className="quantity">3</span>
            </div>
          </Link>
        )}
        {size > 520 && isAuthenticated && (
          <div
            className="web-profile"
            onClick={() => setShowProfile(!showProfile)}
          >
            <img className="profile-pic" src={user.picture} alt={user.name} />
            {/* <h2>{user.name}</h2> */}
            {/* <p>{user.email}</p> */}
          </div>
        )}
        {size < 520 && isAuthenticated && (
          <div className="mobile-profile" onClick={handleProfile}>
            <img className="profile-pic" src={user.picture} alt={user.name} />
            {/* <h2>{user.name}</h2> */}
            {/* <p>{user.email}</p> */}
          </div>
        )}
        {showProfile && <DropDownProfile />}
      </div>
    </>
  );
};

export default Navbar;
