// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7OENWwSE2Il2_FfLTYEwW4TwG6Uo0npg",
  authDomain: "cinema-ai-6fb9b.firebaseapp.com",
  projectId: "cinema-ai-6fb9b",
  storageBucket: "cinema-ai-6fb9b.appspot.com",
  messagingSenderId: "906899249212",
  appId: "1:906899249212:web:1ea40eefde0f554fc3cb39",
  measurementId: "G-NEJX540NDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);


