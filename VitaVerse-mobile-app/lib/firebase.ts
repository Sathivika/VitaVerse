import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGjONKJFvL65X74Vwu3CKjpzYO6REYpcM",
  authDomain: "vitaverse-51a0b.firebaseapp.com",
  projectId: "vitaverse-51a0b",
  storageBucket: "vitaverse-51a0b.firebasestorage.app",
  messagingSenderId: "653228569188",
  appId: "1:653228569188:web:191f9fb168ee2b92082571",
};

// ✅ Initialize Firebase
export const app = initializeApp(firebaseConfig);