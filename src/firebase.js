import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAx4Cm-MBS-ODl1VI9JjQdYoFcnAhzJ0Ww",
  authDomain: "netflix-clone-7e818.firebaseapp.com",
  projectId: "netflix-clone-7e818",
  storageBucket: "netflix-clone-7e818.appspot.com",
  messagingSenderId: "280727365217",
  appId: "1:280727365217:web:07bc23ac029d8a55372c20",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
