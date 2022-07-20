import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
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

/****
 *  Listen for auth status changes
 * 
 * 
 */

onAuthStateChanged(auth, (user) => {
  console.log('user: --', user)
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('user logged in ', uid)
    // ...
  } else {
    // User is signed out
    // ...
    console.log('user logged out')
  }
});


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

      const user = userCredential.user;

      // close modal 
      const modal = document.querySelector('#modal-signup')
      M.Modal.getInstance(modal).close();
      signupForm.reset();

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..

    });

})

/**********
 * 
 * Singing out users 
 */

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault()

  signOut(auth)
    .then(res => {
      console.log('sign out successfull')
    })

})

/***
 * Loggin in users
 */

const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = document.getElementById('login-email').value
  const password = document.getElementById('login-password').value


  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // 
      console.log('sign in successful')
      // close the log in modal
      const modal = document.querySelector('#modal-login')
      M.Modal.getInstance(modal).close();
      loginForm.reset();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('sign in failed')
    });

})