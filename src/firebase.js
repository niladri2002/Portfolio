import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyClskNLLB1FE63YnIBMU0f5MOY3--HPO_0",
    authDomain: "portfolio1-f09fe.firebaseapp.com",
    projectId: "portfolio1-f09fe",
    storageBucket: "portfolio1-f09fe.appspot.com",
    messagingSenderId: "387201928943",
    appId: "1:387201928943:web:da1153b910de0c5fac551a",
    measurementId: "G-57SGY3L582"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
