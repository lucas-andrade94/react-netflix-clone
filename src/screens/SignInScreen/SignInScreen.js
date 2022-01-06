import React, { useRef } from "react";

import "./SignInScreen.css";
import { auth } from "../../firebase";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signInScreen__gray">New to Netflix? </span>
        </h4>
        <button type="submit" onClick={register}>
          Register
        </button>
      </form>
    </div>
  );
}

export default SignInScreen;
