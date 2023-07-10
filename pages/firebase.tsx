// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA47HA2HtMzZUdQUwQQxfi4T19761txgh4",
  authDomain: "authentication-27e45.firebaseapp.com",
  projectId: "authentication-27e45",
  storageBucket: "authentication-27e45.appspot.com",
  messagingSenderId: "768409873318",
  appId: "1:768409873318:web:e4917d4aa72dfd86cd3d67",
  measurementId: "G-HFRGQQKSYP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
