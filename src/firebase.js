import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnZ7wjQxlonqHWDnti7yqwV6hVIsZMpLw",
  authDomain: "instagram-clone-react-be620.firebaseapp.com",
  databaseURL:
    "https://instagram-clone-react-be620-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-be620",
  storageBucket: "instagram-clone-react-be620.appspot.com",
  messagingSenderId: "1092748378123",
  appId: "1:1092748378123:web:e12057e9b506f6f4d9870e",
  measurementId: "G-0EVWP84RHN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
