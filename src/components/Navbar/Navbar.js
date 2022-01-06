import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./NavBar.css";
import NetflixLogo from "../../assets/netflix-logo.png";
import Avatar from "../../assets/avatar.png";
import DownArrow from "../../assets/down-arrow-svgrepo-com.svg"
import { auth } from "../../firebase";

function NavBar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src={NetflixLogo}
          alt="Netflix Logo"
        />
        <div className="nav__links">
          <span onClick={() => navigate("/")} className="nav__link">
            Home
          </span>
          <span className="nav__link">TV Shows</span>
          <span className="nav__link">Movies</span>
          <span className="nav__link">Recently Added</span>
          <span className="nav__link">My List</span>
        </div>
        <div className="nav__dropdown">
          <img className="nav__avatar" src={Avatar} alt="Avatar" />
          <img className="nav__arrow" src={DownArrow} alt="Arrow" />
          <div className="nav__dropdown-content">
            <span
              className="nav__dropdown_link"
              onClick={() => navigate("/profile")}
            >
              Account
            </span>
            <div className="nav__border-separation" />
            <span className="nav__dropdown_link">Help Center</span>
            <div className="nav__border-separation" />
            <span className="nav__dropdown_link" onClick={() => auth.signOut()}>
              Sign Out
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
