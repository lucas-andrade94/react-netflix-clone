import React, { useEffect, useState } from "react";

import "./NavBar.css";
import NetflixLogo from "../../assets/netflix.png";
import Avatar from "../../assets/avatar.png";

function NavBar() {
  const [show, setShow] = useState(false);

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
        <img className="nav__logo" src={NetflixLogo} alt="Netflix Logo" />
        <img className="nav__avatar" src={Avatar} alt="Avatar" />
      </div>
    </div>
  );
}

export default NavBar;
