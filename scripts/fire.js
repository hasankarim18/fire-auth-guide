// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js'

//getFirestore  // firebase/firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7WwRYgc4DLARSJKRWmT44Tfnoj4qKprU",
    authDomain: "fire-auth-112b5.firebaseapp.com",
    projectId: "fire-auth-112b5",
    storageBucket: "fire-auth-112b5.appspot.com",
    messagingSenderId: "383605007046",
    appId: "1:383605007046:web:10ffa191f8b9009c836dc7"
};

// Initialize Firebase 9
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// make auth and firestore references

const auth = getAuth(app)
