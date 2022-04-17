// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgQZBJ3OC1oTLL4ZaUgGaI51PsNWVcfoE",
  authDomain: "photographer-somon.firebaseapp.com",
  projectId: "photographer-somon",
  storageBucket: "photographer-somon.appspot.com",
  messagingSenderId: "587961267740",
  appId: "1:587961267740:web:5ab9b637e07aea8e4191d9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;