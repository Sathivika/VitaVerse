
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGjONKJFvL65X74Vwu3CKjpzYO6REYpcM",
  authDomain:        "vitaverse-51a0b.firebaseapp.com",
  projectId:         "vitaverse-51a0b",
  storageBucket:     "vitaverse-51a0b.firebasestorage.app",
  messagingSenderId: "653228569188",
  appId:             "1:653228569188:web:191f9fb168ee2b92082571",
};

// Prevents re-initialising on hot reload
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db   = getFirestore(app);