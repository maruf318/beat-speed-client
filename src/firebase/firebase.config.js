// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1dhGyeu8DY6X-JWIFS0Ii3WBqhCTLA0s",
  authDomain: "beat-speed-cf643.firebaseapp.com",
  projectId: "beat-speed-cf643",
  storageBucket: "beat-speed-cf643.appspot.com",
  messagingSenderId: "730657548693",
  appId: "1:730657548693:web:22e9e68b1a0fc20b51ae9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
