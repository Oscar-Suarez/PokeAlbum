'use client';

import React, { createContext, useState } from 'react';


export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {

  const [sesionIniciada, setSesionIniciada] = useState(false);
  const [coleccionPoke, setColeccionPoke] = useState([]);


  const contextValue = {
    sesionIniciada,
    setSesionIniciada,
    coleccionPoke, 
    setColeccionPoke};

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}



