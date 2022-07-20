import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { firebaseConfig } from './firebaseConfig.js'

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)




// sign up form
const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = document.querySelector('#signup-email').value
  const password = document.querySelector('#signup-password').value

  console.log(email, password)

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log('credential', userCredential)
      const user = userCredential.user;
      console.log('signup success user', user)
      // close modal 
      const modal = document.querySelector('#modal-signup')
      M.Modal.getInstance(modal).close();
      signupForm.reset();

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log('signup failed', errorMessage)
    });


})