import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

function Auth() {
  const onLogin = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>Auth With Firbase</h2>
      <button onClick={onLogin}>Login with Google</button>
    </>
  );
}

export default Auth;
