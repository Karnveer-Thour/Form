// src/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0LHtD-mPywIKEs3rwmeIVbc-GV5NuSW8",
  authDomain: "form-b18e6.firebaseapp.com",
  projectId: "form-b18e6",
  storageBucket: "form-b18e6.firebasestorage.app",
  messagingSenderId: "411265579139",
  appId: "1:411265579139:web:0ac932ccc12879a63a43b6",
  databaseURL: "https://form-b18e6-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
 export default Firebase 