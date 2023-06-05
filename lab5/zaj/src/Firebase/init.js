// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7OTWRbNacGrVp0sWTNlPGW7RBK2CFZg8",
  authDomain: "todo-d2365.firebaseapp.com",
  projectId: "todo-d2365",
  storageBucket: "todo-d2365.appspot.com",
  messagingSenderId: "877303313254",
  appId: "1:877303313254:web:9242ed19c30c3c8c564ea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);