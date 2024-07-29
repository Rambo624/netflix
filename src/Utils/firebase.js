// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBufrTQiQJBbbK7QBD6n3KlLOCK4vTaa90",
  authDomain: "netflixgpt-c8d03.firebaseapp.com",
  projectId: "netflixgpt-c8d03",
  storageBucket: "netflixgpt-c8d03.appspot.com",
  messagingSenderId: "442134636971",
  appId: "1:442134636971:web:1f820e689e75c3c8c74aee",
  measurementId: "G-MWGR5X8W20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();