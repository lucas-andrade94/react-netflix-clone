import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import db, { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      db.collection("customers")
        .doc(user.uid)
        .collection("subscriptions")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(async (subscription) => {
            setSubscription({
              role: subscription.data().role,
              status: subscription.data().status,
              current_period_end:
                subscription.data().current_period_end.seconds,
              current_period_start:
                subscription.data().current_period_start.seconds,
            });
          });
        });
    }
  }, [user]);

  return (
    <div className="app">
      <Router>
        {(!user && <LoginScreen />) ||
          (user && !subscription && <ProfileScreen />) ||
          (user && subscription && (
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          ))}
      </Router>
    </div>
  );
}

export default App;
