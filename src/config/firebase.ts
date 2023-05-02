import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAqCXGChocE14AikZ6T4oo5IJLOvTBhWOQ",
  authDomain: "todolist-9313a.firebaseapp.com",
  projectId: "todolist-9313a",
  storageBucket: "todolist-9313a.appspot.com",
  messagingSenderId: "650818066708",
  appId: "1:650818066708:web:a85425f0378662c63c8a01",
  measurementId: "G-2620EJ7ZET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);