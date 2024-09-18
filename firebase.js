import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDZySZc49Fcy21M90QpDSDJRswFgbQcT8E",

  authDomain: "fir-expo-3f7d0.firebaseapp.com",

  databaseURL: "https://fir-expo-3f7d0-default-rtdb.firebaseio.com",

  projectId: "fir-expo-3f7d0",

  storageBucket: "fir-expo-3f7d0.appspot.com",

  messagingSenderId: "666095037385",

  appId: "1:666095037385:web:94dccdebaf250cef9a9618",

  measurementId: "G-E3MBRJQ35L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;

export const registerWithEmail = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const auth = firebase.auth();

export const passwordReset = email => auth.sendPasswordResetEmail(email);