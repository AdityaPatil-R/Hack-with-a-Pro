// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import dotenv from "dotenv"
import path from "path"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7FB2Us8aPGwvA2rLkh6fls0tzb1MhPmY",
  authDomain: "bruin-dash.firebaseapp.com",
  projectId: "bruin-dash",
  storageBucket: "bruin-dash.appspot.com",
  messagingSenderId: "585247090828",
  appId: "1:585247090828:web:520b688a7b54e843aa33a9",
  measurementId: "G-HNWVKJN1R0"
};

// Initialize Firebase
// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;