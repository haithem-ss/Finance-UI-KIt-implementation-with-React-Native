import { initializeApp } from "firebase/app";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAWxrvsBBanfsf-Y18lcXm0yYAUar4RQd0",
  authDomain: "streambanking.firebaseapp.com",
  projectId: "streambanking",
  storageBucket: "streambanking.appspot.com",
  messagingSenderId: "1009934452346",
  appId: "1:1009934452346:web:591957295afcf9f9a1ddc3",
  measurementId: "G-LL795G6TTD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
