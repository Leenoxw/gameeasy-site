import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = { 
  apiKey: "AIzaSyAEso1EIVI1f4EmdQSZ3z5PvWlpoP7mwYE",
  authDomain: "role-de-l-utilisateur.firebaseapp.com",
  projectId: "role-de-l-utilisateur",
  storageBucket: "role-de-l-utilisateur.firebasestorage.app",
  messagingSenderId: "1043852188463",
  appId: "1:1043852188463:web:ac7038084ec18e05dc9fda",
  measurementId: "G-Q1GN8GCZR9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);