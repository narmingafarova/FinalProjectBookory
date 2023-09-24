import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAe9h_dkD--Wdj-79BSVdLQ5F6IN22jPak",
  authDomain: "book-92dfc.firebaseapp.com",
  databaseURL: "https://book-92dfc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "book-92dfc",
  storageBucket: "book-92dfc.appspot.com",
  messagingSenderId: "86258017804",
  appId: "1:86258017804:web:6d5f6002793fb0e43d7029"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
