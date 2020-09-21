import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBojhV6567nLdRJ8qRiIS4vRyZKJ8o3vnE",
  authDomain: "beacon-284011.firebaseapp.com",
  databaseURL: "https://beacon-284011.firebaseio.com",
  projectId: "beacon-284011",
  storageBucket: "beacon-284011.appspot.com",
  messagingSenderId: "199684496765",
  appId: "1:199684496765:web:47be443753cb47fda18014",
  measurementId: "G-NRJJPKWQKM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
