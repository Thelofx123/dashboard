import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, setDoc, doc, collection, getDocs,deleteDoc } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { useEffect, useState } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import {firebaseConfig}  from './firebaseKey.js';
import { async } from '@firebase/util';



const app = initializeApp(firebaseConfig)
export const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

export const recipeList = (data) => {
  setDoc(doc(db, `recipe/${data.name}`), data, { merge: true })
}

export const useGetDocsFromFireBase = (collectionName) => {
  let [data, setData] = useState([]);
  const [docData, setDocData] = useState(true)

  const getData = async () => {
    const arr = []
    try {
      const datas = await getDocs(collection(db, collectionName));
      datas.forEach(e => {
        arr.push(e.data())
      })
      setData(arr)
    } catch (error) { }
  }

  useEffect(() => {
    getData();
  }, [docData])

  const orderList = (data, path) => {
    setDoc(doc(db, `${collectionName}/${path}`), { type: data }, { merge: true }).then(() => refresh())
  }
  const refresh = () => {
    setDocData(!docData)
  }
  const deleteDocs = async (path) => {
    deleteDoc(doc(db, `recipe/${path}`)).then(() => refresh())
  }

  return { data, orderList ,deleteDocs};
}


export const useSignUp = async (data) => {
  let user;
  await createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      user = userCredential.user;
      setDoc(doc(db, `user/${user.uid}`), { email: data.email }, { merge: true })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}


export const signIn = async (data) => {
  await signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
}


export const logOutFromFirebase = async (data) => {
  signOut(auth).then(() => {

  }).catch((error) => {

  });
}


export const uploadFile = (data, path) => {
  if (data == null) return;
  const imageRef = ref(storage, `images/${data.name}`);
  uploadBytes(imageRef, data).then((snapshot) => {
    getDownloadURL(snapshot.ref).then(url =>
      setDoc(doc(db, `recipe/${path}`), { url }, { merge: true })
    )
  })
};
