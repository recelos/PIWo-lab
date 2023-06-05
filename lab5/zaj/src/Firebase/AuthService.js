import { useEffect, useState } from "react";
import { auth } from "./init";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const logInWithGoogle = async () => {
  try {
    const user = await signInWithPopup(auth, googleProvider);
    console.log(user)
  } catch (error) {
    console.error({ error });
    alert(error.message);
  }
}

export const useUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  return user;
}

export const logOut = () => signOut(auth);