import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBjONUL0e3VKeK93JBDWewbZ8kt5LQ9fZs",
  authDomain: "z1-shivam-blog.firebaseapp.com",
  projectId: "z1-shivam-blog",
  storageBucket: "z1-shivam-blog.appspot.com",
  messagingSenderId: "354295950143",
  appId: "1:354295950143:web:ecd933786c83144e77018a",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
