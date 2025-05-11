// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGUvMOZhsIWGydMZjFN3x1AkU38BHOcNM",
  authDomain: "admit-9e216.firebaseapp.com",
  projectId: "admit-9e216",
  storageBucket: "admit-9e216.firebasestorage.app",
  messagingSenderId: "293875761031",
  appId: "1:293875761031:web:b68aab5eb1aaccaf531d22",
  measurementId: "G-D2LG1V986M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app);
export const googleProvider=new GoogleAuthProvider();

