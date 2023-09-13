
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUnvXIXv64YDWYxG5U8V1mOthORoQD8as",
  authDomain: "e-clone-7.firebaseapp.com",
  projectId: "e-clone-7",
  storageBucket: "e-clone-7.appspot.com",
  messagingSenderId: "276485584338",
  appId: "1:276485584338:web:2719056a835303b8fe040b",
  measurementId: "G-GGZXTT8EJR"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };