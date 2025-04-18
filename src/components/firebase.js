// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9rQIw1KR6-NEQtzED2ttqC2VLC9caHB4",
  authDomain: "careerchatbot-216b8.firebaseapp.com",
  projectId: "careerchatbot-216b8",
  storageBucket: "careerchatbot-216b8.firebasestorage.app",
  messagingSenderId: "51766801701",
  appId: "1:51766801701:web:9dd89e4c80d39d513b96cc",
  measurementId: "G-78L1930CCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;