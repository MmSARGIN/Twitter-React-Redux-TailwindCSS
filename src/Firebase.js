// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXbggkvbGI1DJxuqr_D45D-kCxRNUygNE",
  authDomain: "twitter-clone-731dc.firebaseapp.com",
  projectId: "twitter-clone-731dc",
  storageBucket: "twitter-clone-731dc.appspot.com",
  messagingSenderId: "785184070917",
  appId: "1:785184070917:web:4e5e523934e8547b8aab6c",
  measurementId: "G-JRPGJSTJWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()

export default  db ;