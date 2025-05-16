// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz0X-mfBS4naEfQFtfgsJZOodggXT_vcE",
  authDomain: "prepwise-42a00.firebaseapp.com",
  projectId: "prepwise-42a00",
  storageBucket: "prepwise-42a00.firebasestorage.app",
  messagingSenderId: "150893254894",
  appId: "1:150893254894:web:0e7d065c97aeedad07fbff",
  measurementId: "G-DDGPR3FS6L"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore(app);