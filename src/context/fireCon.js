import React, { useContext, useState, useEffect, createContext } from "react";


const fireCon = createContext()

export const FireProvider = ({children}) => {
   
  const [docData, setDocData] =useState(false)

    return (
        <fireCon.Provider value={{docData, setDocData}}>
         {children}   
        </fireCon.Provider>
    )
}

export const useFireCon = () => useContext(fireCon)