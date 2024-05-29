// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8Y5nzLjQEhYArOYL9VGdGg49QEaoLNM8",
  authDomain: "voidmovies-3af8b.firebaseapp.com",
  projectId: "voidmovies-3af8b",
  storageBucket: "voidmovies-3af8b.appspot.com",
  messagingSenderId: "928805103783",
  appId: "1:928805103783:web:f28d31c227a020cfd39382",
  measurementId: "G-ZX071YSE5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore(app)
export default app