import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCwzWrbE5qeifXa88VovjIUL-hQ2ncydKc",
    authDomain: "grocer-clone-69709.firebaseapp.com",
    projectId: "grocer-clone-69709",
    storageBucket: "grocer-clone-69709.appspot.com",
    messagingSenderId: "858024080693",
    appId: "1:858024080693:web:a65d4c5cb33f3a8e19487c"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};