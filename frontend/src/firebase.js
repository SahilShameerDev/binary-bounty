// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBjvl8tVIha8Z05RkapzzMof6IKkOrgZE",
  authDomain: "fir-a3d13.firebaseapp.com",
  projectId: "fir-a3d13",
  storageBucket: "fir-a3d13.firebasestorage.app",
  messagingSenderId: "333936523882",
  appId: "1:333936523882:web:7f9fa0b74ebe99c49ee813",
  measurementId: "G-V71WC3XX3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);