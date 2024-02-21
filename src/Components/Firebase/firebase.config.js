// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCALbTyfa-GVPORYt2DYGOWMk1Y-K0lfgo",
  authDomain: "vision-6053c.firebaseapp.com",
  projectId: "vision-6053c",
  storageBucket: "vision-6053c.appspot.com",
  messagingSenderId: "685287048029",
  appId: "1:685287048029:web:89d18699184f1f339cdeb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app;
