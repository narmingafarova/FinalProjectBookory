import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC5pLHfuafzR1gIyhSWANZRTLVqFOG4Pjk",
  authDomain: "finalbook-603a3.firebaseapp.com",
  databaseURL:
    "https://finalbook-603a3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "finalbook-603a3",
  storageBucket: "finalbook-603a3.appspot.com",
  messagingSenderId: "949632057832",
  appId: "1:949632057832:web:13136ef8e8fc705b01a45d",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
