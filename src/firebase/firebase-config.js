import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyCPaXFjdSX_isZJIAghvwACJwg7QixH39w",
//     authDomain: "react-redux-38a3a.firebaseapp.com",
//     projectId: "react-redux-38a3a",
//     storageBucket: "react-redux-38a3a.appspot.com",
//     messagingSenderId: "959302865489",
//     appId: "1:959302865489:web:4ce559d437f6da69ac1e70"
// };

// firebase.initializeApp(firebaseConfig);

const firebaseConfig = {
    apiKey: "AIzaSyABu3JPK_rU6JHZLBs5nts7gvlHkqLZ72k",
    authDomain: "react-app-journal-a18f3.firebaseapp.com",
    projectId: "react-app-journal-a18f3",
    storageBucket: "react-app-journal-a18f3.appspot.com",
    messagingSenderId: "1004909830753",
    appId: "1:1004909830753:web:9c0e399ba77fb431d94020"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}