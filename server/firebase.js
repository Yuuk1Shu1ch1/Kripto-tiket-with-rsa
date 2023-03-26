import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// isikan firebaseConfig disini
const firebaseConfig = {
    apiKey: "AIzaSyAlrXLHO4N6iwQnftLRDq52zSzmUwU43Lc",
    authDomain: "expressjs-fp.firebaseapp.com",
    projectId: "expressjs-fp",
    storageBucket: "expressjs-fp.appspot.com",
    messagingSenderId: "35720847152",
    appId: "1:35720847152:web:f030a0e97b6aef23f332f5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = firebaseApp.firestore();