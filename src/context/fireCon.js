import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useState, useEffect, createContext } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { logOutFromFirebase } from "../firebase";

const fireCon = createContext()

export const FireProvider = ({children}) => {
  let [docData, setDocData] =useState(false)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setDocData((docData = true));
      console.log(docData)
    } else {
      setDocData((docData = false));
    }
  });

    return (
        <fireCon.Provider value={{docData, setDocData}}>
         {children}   
        </fireCon.Provider>
    )
}

export const useFireCon = () => useContext(fireCon)