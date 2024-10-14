// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyvTzDyHUSNuFyh5xWwkCnjhBr3_nTofc",
  authDomain: "first-auth-51a65.firebaseapp.com",
  projectId: "first-auth-51a65",
  storageBucket: "first-auth-51a65.appspot.com",
  messagingSenderId: "1092442677951",
  appId: "1:1092442677951:web:39ba1136d2087293f45c0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Write Your Own Code For The Service Used
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
