import { useEffect, useState } from "react";
import { auth } from "./init";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const twitterProvider = new GithubAuthProvider();

export const logInWithGoogle = async () => {
  try {
    const user = await signInWithPopup(auth, googleProvider);
    console.log(user)
  } catch (error) {
    console.error({ error });
    alert(error.message);
  }
}

export const logInWithGithub = async () => {
  try {
    const user = await signInWithPopup(auth, twitterProvider);
    console.log(user)
  } catch (error) {
    console.error({ error });
    alert(error.message);
  }
}

export const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  return user;
}

export const logOut = () => signOut(auth);