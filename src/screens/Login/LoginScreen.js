import React, { useState } from "react";

import "./LoginScreen.css";
import SignInScreen from "../SignInScreen/SignInScreen";
import SignUpScreen from "../SignUpScreen/SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const pageRender = () => {
    if (signIn) {
      return <SignInScreen />;
    } else if (signUp) {
      return <SignUpScreen />;
    } else {
      return (
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div className="loginScreen__input">
            <form>
              <input type="email" placeholder="Email Address" />
              <button
                onClick={() => {
                  setSignIn(false);
                  setSignUp(true);
                }}
                className="loginScreen__getStarted"
              >
                GET STARTED
              </button>
            </form>
          </div>
        </>
      );
    }
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          onClick={() => {
            setSignIn(false);
            setSignUp(false);
          }}
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />
        <button
          onClick={() => {
            setSignIn(true);
            setSignUp(false);
          }}
          className="loginScreen__signIn"
        >
          Sign In
        </button>
        <button
          onClick={() => {
            setSignUp(true);
            setSignIn(false);
          }}
          className="loginScreen__signUp"
        >
          Sign Up
        </button>

        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">{pageRender()}</div>
    </div>
  );
}

export default LoginScreen;
