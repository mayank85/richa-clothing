import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCaWuEtxCaJGsWSTnBzHSiJGuu5v2lp5SA",
    authDomain: "richa-clothing-db.firebaseapp.com",
    projectId: "richa-clothing-db",
    storageBucket: "richa-clothing-db.appspot.com",
    messagingSenderId: "37944185690",
    appId: "1:37944185690:web:2c4421e592b0e66f65d963",
    measurementId: "G-0CVYS9XR66"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;