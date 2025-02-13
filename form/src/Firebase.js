import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSOXyhjlh9lXzWjEI1lsId9XsKuEaQFvY",
    authDomain: "form-a1959.firebaseapp.com",
    projectId: "form-a1959",
    storageBucket: "form-a1959.firebasestorage.app",
    messagingSenderId: "358790379111",
    appId: "1:358790379111:web:5d87a87c0ce72b959dc6c2",
    measurementId: "G-7T957ELHYT"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push };