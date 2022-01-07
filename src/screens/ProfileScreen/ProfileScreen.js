import React from "react";
import { useSelector } from "react-redux";

import "./ProfileScreen.css";
import NavBar from "../../components/Navbar/Navbar";
import PlansScreen from "../PlansScreen/PlansScreen";
import Footer from "../../components/Footer/Footer";
import Avatar from "../../assets/avatar.png";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <>
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
                <PlansScreen />
                <button
                  onClick={() => auth.signOut()}
                  className="profileScreen__signOut"
                >
                  Sign Out
                </button>
                <div className="profileScreen__information">
                  <p>
                    To start, click on Subscribe in any plan and use the
                    following credit card:
                  </p>
                  <p>4242 4242 4242 4242 - 01/30 - CVC: 123</p>
                  <p>Name on Card: ABC</p>
                  <p>Billing Address: ABC in all fields</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfileScreen;
