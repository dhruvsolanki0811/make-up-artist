// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8Y5RxO8vJRwI3TvPdehSCCTofFSAmPUc",
    authDomain: "makeup-artist-9cb46.firebaseapp.com",
    projectId: "makeup-artist-9cb46",
    storageBucket: "makeup-artist-9cb46.appspot.com",
    messagingSenderId: "891732331053",
    appId: "1:891732331053:web:8202f4cf68a430477246a4"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const udb=getDatabase(app)
const auth =getAuth()
export { db,auth,udb}