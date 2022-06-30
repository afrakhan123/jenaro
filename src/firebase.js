// JavaScript
// src.firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBahrdvNyV4EdqhQFrUJbrp_cBK0ff-_SA",
  authDomain: "restaurant-8d4fd.firebaseapp.com",
  projectId: "restaurant-8d4fd",
  storageBucket: "restaurant-8d4fd.appspot.com",
  messagingSenderId: "759411436739",
  appId: "1:759411436739:web:a453e5e9e43edc09498676",
  measurementId: "G-7VF05LY41X"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage()
export {db, storage}