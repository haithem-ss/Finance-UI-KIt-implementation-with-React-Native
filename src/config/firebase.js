// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAWxrvsBBanfsf-Y18lcXm0yYAUar4RQd0",
  authDomain: "streambanking.firebaseapp.com",
  projectId: "streambanking",
  storageBucket: "streambanking.appspot.com",
  messagingSenderId: "1009934452346",
  appId: "1:1009934452346:web:591957295afcf9f9a1ddc3",
  measurementId: "G-LL795G6TTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth=initializeAuth(app)
console.log(app)
export default app;
