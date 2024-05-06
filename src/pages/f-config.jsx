import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCMjdOkyks5C6RTW5KFpzo9Q2i4LvJ6pkM",
    authDomain: "react-12753.firebaseapp.com",
    projectId: "react-12753",
    storageBucket: "react-12753.appspot.com",
    messagingSenderId: "958660522214",
    appId: "1:958660522214:web:266eca1364ce5164ee0b27",
    measurementId: "G-MQCWLDNR6H"
  };

  const app=initializeApp(firebaseConfig)
  export const auth = getAuth(app)