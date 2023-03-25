import React from "react";

import { createContext, useState, useContext } from "react";

export const Appcontext = createContext();

export const miContext = () => useContext(Appcontext);

const Provider = ({ children }) => {
  const [contador, setContador] = useState(0);

  const [compra, setCompra] = useState([]);

  const [instrumentos2, setInstrumentos2] = useState([]);

  return (
    // <Appcontext.Provider value={[contador, setContador]}>

    <Appcontext.Provider
      value={{
        contador,
        setContador,
        compra,
        setCompra,
        instrumentos2,
        setInstrumentos2,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export default Provider;
