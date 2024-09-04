// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjtUOToR5gzqHq5zUYf77Bo1TaA8Aka-4",
    authDomain: "homeeasyweb.firebaseapp.com",
    projectId: "homeeasyweb",
    storageBucket: "homeeasyweb.appspot.com",
    messagingSenderId: "1012248004023",
    appId: "1:1012248004023:web:10e905a67dd6fa37509432"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
