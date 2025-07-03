// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-20b0e.firebaseapp.com",
  projectId: "mern-estate-20b0e",
  storageBucket: "mern-estate-20b0e.firebasestorage.app",
  messagingSenderId: "872138171752",
  appId: "1:872138171752:web:fa26d4e19f2af6f448e2dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);