import { initializeApp } from 'firebase/app';
import { getAuth , createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth';
import { getFirestore, setDoc, doc, collection, getDocs} from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { useEffect,  useState } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

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
export const auth = getAuth();
export const db = getFirestore(app);

export const recipeList = (data) => {
  const recipeRef = collection(db, "recipe");
  setDoc(doc(db, `recipe/${data.name}`), data, { merge: true })
}

export const storage = getStorage(app);



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
    console.log(docData, ": docdata")
  }

  return { data , orderList};
}

export const useSignUp = async (data) => {
  let user ;
      await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
         user = userCredential.user;
         console.log(user.uid)
         setDoc(doc(db, `user/${user.uid}`), { email:data.email }, { merge: true })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}

export const signIn = async (data) => {
  let user ;
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
