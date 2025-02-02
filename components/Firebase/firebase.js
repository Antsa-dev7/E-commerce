import * as firebase from 'firebase';
import 'firebase/auth';

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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;



export const auth = firebase.auth();

export const loginWithEmail = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const registerWithEmail = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const logout = () => auth.signOut();

export const passwordReset = email => auth.sendPasswordResetEmail(email);
