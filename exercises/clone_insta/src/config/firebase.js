import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAN4GN_vHu6HLEUlFwsMZDj4kCl2SC2vto",
    authDomain: "clone-80671.firebaseapp.com",
    databaseURL: "https://clone-80671-default-rtdb.firebaseio.com",
    projectId: "clone-80671",
    storageBucket: "clone-80671.appspot.com",
    messagingSenderId: "628736700355",
    appId: "1:628736700355:web:7b1ab1432558e161d21776",
    measurementId: "G-0YR276BQRG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth, signInWithEmailAndPassword, onAuthStateChanged };
