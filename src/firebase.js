// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDZfNpThnTL4RkdcY4hI-EXktnY7oiZwUo",
    authDomain: "project-34fb8.firebaseapp.com",
    projectId: "project-34fb8",
    storageBucket: "project-34fb8.appspot.com",
    messagingSenderId: "978291823285",
    appId: "1:978291823285:web:e9eef295188c396dc6e4fc",
    measurementId: "G-F8XV26SRND"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
