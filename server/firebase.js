import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// isikan firebaseConfig disini
const firebaseConfig = {
  apiKey: "AIzaSyA2ma1p5KJhEmmv6jQNkljvYqZx7FKAK4U",
  authDomain: "kripto-rsa.firebaseapp.com",
  projectId: "kripto-rsa",
  storageBucket: "kripto-rsa.appspot.com",
  messagingSenderId: "573621728992",
  appId: "1:573621728992:web:ad84a0dd58c36b9bb58285"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = firebaseApp.firestore();