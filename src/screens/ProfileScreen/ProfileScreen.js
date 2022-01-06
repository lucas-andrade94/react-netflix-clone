import React from "react";
import { useSelector } from "react-redux";

import "./ProfileScreen.css";
import NavBar from "../../components/Navbar/Navbar";
import Avatar from "../../assets/avatar.png";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <NavBar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src={Avatar} alt="Profile" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
