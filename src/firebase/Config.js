import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCrThJklCCnH6PJMVUocQ2CeMk2WpRh5Pc",
    authDomain: "shez-up.firebaseapp.com",
    databaseURL: "https://shez-up-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shez-up",
    storageBucket: "shez-up.appspot.com",
    messagingSenderId: "279615555905",
    appId: "1:279615555905:web:a69de3206d7ae83fb3f9c0",
    measurementId: "G-0C770XW4BC"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
// const projectFirestore = firebase.firestore();

export { projectStorage };