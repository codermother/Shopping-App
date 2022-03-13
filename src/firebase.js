import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyABm7Dpmfaw9bFsP8PFYDWNUS8vlE3T9gQ",
  authDomain: "shopping-app-v10.firebaseapp.com",
  projectId: "shopping-app-v10",
  storageBucket: "shopping-app-v10.appspot.com",
  messagingSenderId: "735079950407",
  appId: "1:735079950407:web:4a9ac64a9fe6a960852962",
  measurementId: "G-PHKX1F89HN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
