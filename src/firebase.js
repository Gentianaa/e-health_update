// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ1unoxKQOZGqSaPkIFDTPzDrqVsEp-9A",
  authDomain: "fir-auth-5388c.firebaseapp.com",
  projectId: "fir-auth-5388c",
  storageBucket: "fir-auth-5388c.appspot.com",
  messagingSenderId: "259060030633",
  appId: "1:259060030633:web:26d961beae0738dcb55db8",
  measurementId: "G-CG04E6WSE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
