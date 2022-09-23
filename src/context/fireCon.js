import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";


const fireCon = createContext()

export const FireProvider = ({children}) => {
  let [docData, setDocData] =useState(false)
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setDocData((docData = true));
      navigate('/soon')
    } else {
      setDocData((docData = false));
      navigate('/signin')
    }
  });

    return (
        <fireCon.Provider value={{docData, setDocData}}>
         {children}   
        </fireCon.Provider>
    )
}

export const useFireCon = () => useContext(fireCon)