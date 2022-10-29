// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import "firebase/auth";
// import "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFXeJmcJAtn5sfrAY8_MmPeyRwulOxq-U",
    authDomain: "belajar-firebase-642da.firebaseapp.com",
    projectId: "belajar-firebase-642da",
    storageBucket: "belajar-firebase-642da.appspot.com",
    messagingSenderId: "964022936514",
    appId: "1:964022936514:web:4e43b4db311ff75bca2c5b",
    measurementId: "G-XWGCZ1NXS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// const analytics = getAnalytics(app);

export default app;