// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcWV6bxfg-v8unghg6L_22Z62FA-sMg9w",
    authDomain: "whatsapp-clone-d7f3b.firebaseapp.com",
    projectId: "whatsapp-clone-d7f3b",
    storageBucket: "whatsapp-clone-d7f3b.appspot.com",
    messagingSenderId: "1057190364448",
    appId: "1:1057190364448:web:397f07160f7fe3cc0c0345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider};