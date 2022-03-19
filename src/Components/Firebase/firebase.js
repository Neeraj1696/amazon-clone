import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYBvO8OFnBv8iyUxzq_gcYT5JuiI2SAx4",
  authDomain: "clone-fa543.firebaseapp.com",
  projectId: "clone-fa543",
  storageBucket: "clone-fa543.appspot.com",
  messagingSenderId: "255800311865",
  appId: "1:255800311865:web:2b9a897ea7cb05bfb58de8",
  measurementId: "G-TMHS1K9KG3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
