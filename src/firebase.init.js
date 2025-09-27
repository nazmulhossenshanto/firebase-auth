// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2sBP_Z-31ZwWvAQP77HH969HxsJLPoEQ",
  authDomain: "fir-auth-deb90.firebaseapp.com",
  projectId: "fir-auth-deb90",
  storageBucket: "fir-auth-deb90.firebasestorage.app",
  messagingSenderId: "941195409303",
  appId: "1:941195409303:web:c41823999f8da4565ab6d2",
  measurementId: "G-496VBYCN4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
