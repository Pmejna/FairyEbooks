import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCNfFVg4MjNPOrl0pgMvjT2UFXG_tmh_H8",
    authDomain: "children-books-61ecd.firebaseapp.com",
    projectId: "children-books-61ecd",
    storageBucket: "children-books-61ecd.appspot.com",
    messagingSenderId: "759582376373",
    appId: "1:759582376373:web:dc4a841ade01eaf44459fc",
    measurementId: "G-RR92B16L3C"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;