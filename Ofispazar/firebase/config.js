import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCot0_PMHBjotfdtH9m2gNfPgajfJ6tTU0",
  authDomain: "ofispazar-9700a.firebaseapp.com",
  databaseURL: "https://ofispazar-9700a-default-rtdb.firebaseio.com",
  projectId: "ofispazar-9700a",
  storageBucket: "ofispazar-9700a.appspot.com",
  messagingSenderId: "644234838329",
  appId: "1:644234838329:web:892cfc82c0e10bf1ea28e8",
  measurementId: "G-39HMLVYX7L"
};

const app = initializeApp(firebaseConfig); 
const realDb = getDatabase(app); 
const auth = getAuth(app) 
export { realDb, auth } 