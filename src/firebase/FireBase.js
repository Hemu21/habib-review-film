import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAxJLdQSr8B3s0l0lwDtioVM1On5VM9DHo",
  authDomain: "habibmovie.firebaseapp.com",
  projectId: "habibmovie",
  storageBucket: "habibmovie.appspot.com",
  messagingSenderId: "541182035621",
  appId: "1:541182035621:web:8e79f9fe99903058452f4c"
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const auth = getAuth(app)
export const db = getFirestore(app)
export const movieref = collection(db, 'movies')
export const usersref = collection(db, 'users')
export default app 
