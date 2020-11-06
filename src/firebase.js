import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTX3ADKZ_BZNeVtsR6lNi1qlrDLm2vR7M",
  authDomain: "whatsapp-clonef.firebaseapp.com",
  databaseURL: "https://whatsapp-clonef.firebaseio.com",
  projectId: "whatsapp-clonef",
  storageBucket: "whatsapp-clonef.appspot.com",
  messagingSenderId: "1081412002762",
  appId: "1:1081412002762:web:4c4749208e427018e46533"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
