// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtA7Td89qWJ8OemAjuy0PyhdjF7dkJOLI",
  authDomain: "musicplayer-rn.firebaseapp.com",
  databaseURL:
    "https://musicplayer-rn-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "musicplayer-rn",
  storageBucket: "musicplayer-rn.appspot.com",
  messagingSenderId: "78300318415",
  appId: "1:78300318415:web:dee45ffc04d86b49c585ba",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
