import React, { useContext, useState, createContext } from "react";


const strCon = createContext()

export const StrProvider = ({children}) => {
   
  const [str, setStr] =useState([])

    return (
        <strCon.Provider value={{str, setStr}}>
         {children}   
        </strCon.Provider>
    )
}

export const useStrCon = () => useContext(strCon)