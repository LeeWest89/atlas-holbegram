// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF7Li6YuWDeyg4Ch7hU3MRVOeVGDhVVV8",
  authDomain: "atlas-holbegram-cc3e9.firebaseapp.com",
  projectId: "atlas-holbegram-cc3e9",
  storageBucket: "atlas-holbegram-cc3e9.appspot.com",
  messagingSenderId: "83531554071",
  appId: "1:83531554071:web:22fd98194884d667952b52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);