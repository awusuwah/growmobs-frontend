import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

/**
 * The configuration which is used to connect the NodeJS application to the firebase service.
 */
const firebaseConfig = {
  apiKey: "AIzaSyBFok9DGqyHEYwZqPLhtMcsIWw4C-Vf4RA",
  authDomain: "growmobs-frontend.firebaseapp.com",
  databaseURL: "https://growmobs-frontend.firebaseio.com",
  projectId: "growmobs-frontend",
  storageBucket: "growmobs-frontend.appspot.com",
  messagingSenderId: "701016036328",
  appId: "1:701016036328:web:19f4726f3f7fc99cab0a5d",
  measurementId: "G-7RX194CZGD",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const analytics = firebase.analytics();
export const firestore = firebase.firestore();
