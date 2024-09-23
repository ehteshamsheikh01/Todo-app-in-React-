
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDaZNOKgzvJzejKg_TMud16EJlj7vCz8xI",
  authDomain: "react-todo-app-02.firebaseapp.com",
  projectId: "react-todo-app-02",
  storageBucket: "react-todo-app-02.appspot.com",
  messagingSenderId: "520128044734",
  appId: "1:520128044734:web:73df78d7d7220bbb4088ef",
  measurementId: "G-7276PWKPSC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
