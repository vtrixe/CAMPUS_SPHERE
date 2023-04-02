// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANH2AdPasFUdmPO4k-ZhdachoIbeE3_jI",
  authDomain: "campus-sphere-11c79.firebaseapp.com",
  projectId: "campus-sphere-11c79",
  storageBucket: "campus-sphere-11c79.appspot.com",
  messagingSenderId: "531026740438",
  appId: "1:531026740438:web:3a5e76b6eeaa7523067577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth,app };