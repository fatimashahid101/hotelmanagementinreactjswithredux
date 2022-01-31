import { initializeApp } from "firebase/app";
// Authentication
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
//Database
import {
  getDatabase,
  onChildAdded,
  child,
  ref,
  push,
  update,
  set,
  onValue,
  remove
} from "firebase/database";

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCVj4N6OYsxmwFKHP-zmjVUi4TeAOQT7go",
    authDomain: "hotel-management-app-f41bb.firebaseapp.com",
    projectId: "hotel-management-app-f41bb",
    storageBucket: "hotel-management-app-f41bb.appspot.com",
    messagingSenderId: "1071626887111",
    appId: "1:1071626887111:web:fd66731f9dbdae6f4303e2",
    measurementId: "G-R3RL66D50D"
  };


// const firebaseConfig = {
//   apiKey: "AIzaSyCJNX5eCjvTV_F2xnFhEmDCNNzOq5pOWw0",
//   authDomain: "reacthotelmanagement.firebaseapp.com",
//   projectId: "reacthotelmanagement",
//   storageBucket: "reacthotelmanagement.appspot.com",
//   messagingSenderId: "901644970153",
//   appId: "1:901644970153:web:f8754fb31c32390acea1b8"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  database,
  onChildAdded,
  child,
  ref,
  push,
  update,
  set,
  onValue,
  remove
};
