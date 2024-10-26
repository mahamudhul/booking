// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnd77GTeybgl0lRHHXrGFPM5m2mOXMG1E",
    authDomain: "auth-firebase-context-ta-4bf85.firebaseapp.com",
    projectId: "auth-firebase-context-ta-4bf85",
    storageBucket: "auth-firebase-context-ta-4bf85.appspot.com",
    messagingSenderId: "882479139036",
    appId: "1:882479139036:web:cfebc9dde8a2abb414cc19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;