/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admit-840d3.firebaseapp.com",
  projectId: "admit-840d3",
  storageBucket: "admit-840d3.firebasestorage.app",
  messagingSenderId: "1058805832455",
  appId: "1:1058805832455:web:78e8cefa1422cdecaa03a2",
  measurementId: "G-V753S604T9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(); */