import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "booklia.firebaseapp.com",
    projectId: "booklia",
    storageBucket: "booklia.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
