// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3rHEII-2muB7kuE-epcA7Imc_7VI0CRs",
    authDomain: "cinema-alkemy.firebaseapp.com",
    projectId: "cinema-alkemy",
    storageBucket: "cinema-alkemy.appspot.com",
    messagingSenderId: "1091924500650",
    appId: "1:1091924500650:web:0fdc9f9f7d3a0415e230d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
