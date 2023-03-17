// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJiqu6rqwau5m7YzkevovbICkOB5S574U",
  authDomain: "crudcoder-544fb.firebaseapp.com",
  projectId: "crudcoder-544fb",
  storageBucket: "crudcoder-544fb.appspot.com",
  messagingSenderId: "565209805826",
  appId: "1:565209805826:web:082a4a677491c820c9231b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
