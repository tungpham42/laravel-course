import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoQo8tPRvpQtT51EHMMzcV82WA29e6-_o",
  authDomain: "quanlykhoahoclaptrinh.firebaseapp.com",
  projectId: "quanlykhoahoclaptrinh",
  storageBucket: "quanlykhoahoclaptrinh.firebasestorage.app",
  messagingSenderId: "840836319036",
  appId: "1:840836319036:web:e8d07e274c2ab122ac4039",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
