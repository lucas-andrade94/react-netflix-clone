import React, { useState } from "react";

import "./LoginScreen.css";
import SignInScreen from "../SignInScreen/SignInScreen";
import Footer from "../../components/Footer/Footer";
import NetflixLogo from "../../assets/netflix-logo.png";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");

  console.log(email);

  return (
    <>
      <div className="loginScreen">
        <div className="loginScreen__background">
          <img
            onClick={() => setSignIn(false)}
            className="loginScreen__logo"
            src={NetflixLogo}
            alt="Netflix Logo"
          />
          <button
            onClick={() => setSignIn(true)}
            className="loginScreen__signIn"
          >
            Sign In
          </button>

          <div className="loginScreen__gradient" />
        </div>

        <div className="loginScreen__body">
          {signIn ? (
            <SignInScreen emailLoginScreen={email} />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>Ready to watch? Click on Sign In and register.</h3>

              <div className="loginScreen__input">
                <form>
                  <input
                    type="email"
                    placeholder="Email Address"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginScreen;
