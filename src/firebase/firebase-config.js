import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCPaXFjdSX_isZJIAghvwACJwg7QixH39w",
    authDomain: "react-redux-38a3a.firebaseapp.com",
    projectId: "react-redux-38a3a",
    storageBucket: "react-redux-38a3a.appspot.com",
    messagingSenderId: "959302865489",
    appId: "1:959302865489:web:4ce559d437f6da69ac1e70"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}