import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfdxJWMdBmUUPiULs25K3_TxGy0eFmZlA",
  authDomain: "bookory-5cd8c.firebaseapp.com",
  databaseURL:
    "https://bookory-5cd8c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bookory-5cd8c",
  storageBucket: "bookory-5cd8c.appspot.com",
  messagingSenderId: "126460300952",
  appId: "1:126460300952:web:23faf22c7fc8f0700f0aed",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
