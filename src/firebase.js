import {initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore,setDoc ,doc,getDoc, collection, addDoc, getDocs} from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { useContext, useEffect, useMemo, useState } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { useStoreCon } from './context/storeContext';

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
export const db = getFirestore(app);

  export const recipeList = (data) =>{
    const recipeRef = collection(db, "recipe");
    setDoc(doc(db,`recipe/${data.name}`),data,{merge:true})
  }

  export const orderList = (data,path) =>{
    const recipeRef = collection(db, "order");
    setDoc(doc(db,`order/${path}`),{type:data},{merge:true})
  }

  export const storage = getStorage(app);

  export const useGetDocsFromFireBase=(collectionName)=>{
    let [data,setData]=useState([]);
    const arr =[]
    const getData=async()=>{

    try {
        const datas= await getDocs(collection(db,collectionName));
        datas.forEach(e=>{
          arr.push(e.data())
        })
        setData(arr)

    } catch (error) {}
    }
     useEffect(()=>{
       getData();
     },[])
    return [data]
 }

export const uploadFile = (data,path) => {
  if (data == null) return;
  const imageRef = ref(storage, `images/${data.name}`);
  uploadBytes(imageRef, data).then((snapshot)=>{
    getDownloadURL(snapshot.ref).then(url=>
      setDoc(doc(db,`recipe/${path}`),{url},{merge:true})
  )})
};
