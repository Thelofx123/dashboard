import React, { useContext, useState, useEffect, createContext } from "react";


const storeCon = createContext()

export const StoreProvider = ({children}) => {
   
  const [data, setData] =useState(false)

    return (
        <storeCon.Provider value={{data, setData}}>
         {children}   
        </storeCon.Provider>
    )
}

export const useStoreCon = () => useContext(storeCon)