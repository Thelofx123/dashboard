import {initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore,setDoc ,doc,getDoc, collection} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmGuNulRFVi_vvV3mh2EEObtzoYHFJlkM",
    authDomain: "dashboard-71132.firebaseapp.com",
    projectId: "dashboard-71132",
    storageBucket: "dashboard-71132.appspot.com",
    messagingSenderId: "766564711124",
    appId: "1:766564711124:web:650f4beb5018b35fc4d941",
    measurementId: "G-PQXD1K1Z7R"
  };
  const app = initializeApp(firebaseConfig)
 const db = getFirestore(app);

  export const recipeList = (data) =>{
    const recipeRef = collection(db, "recipe");
    setDoc(recipeRef,data)
    

  }
