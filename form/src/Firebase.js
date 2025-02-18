// src/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBSOXyhjlh9lXzWjEI1lsId9XsKuEaQFvY",
    authDomain: "form-a1959.firebaseapp.com",
    projectId: "form-a1959",
    storageBucket: "form-a1959.firebasestorage.app",
    messagingSenderId: "358790379111",
    appId: "1:358790379111:web:5d87a87c0ce72b959dc6c2",
    measurementId: "G-7T957ELHYT",
    databaseURL: "https://form-a1959-default-rtdb.asia-southeast1.firebasedatabas.app/",
  };

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
 export default Firebase 