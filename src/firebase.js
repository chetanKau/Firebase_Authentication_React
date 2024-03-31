// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVMKtgaYvPGPZns4vZTeIjxmQ3KTfX6j4",
  authDomain: "geekster-react.firebaseapp.com",
  projectId: "geekster-react",
  storageBucket: "geekster-react.appspot.com",
  messagingSenderId: "381275395813",
  appId: "1:381275395813:web:46a57852fbf8fdb5cd660c",
  measurementId: "G-D13HYGQF79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
// const analytics = getAnalytics(app);