// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxW3lbxVvVmkSLrX1LvnlA7EblDS1JcXg",
    authDomain: "react-router-firebase3.firebaseapp.com",
    projectId: "react-router-firebase3",
    storageBucket: "react-router-firebase3.appspot.com",
    messagingSenderId: "423208711906",
    appId: "1:423208711906:web:9f142c1f13ccbd99f150bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;