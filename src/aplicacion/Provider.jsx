import React from "react";

import { createContext, useState, useContext } from "react";

export const Appcontext = createContext();

export const miContext = () => useContext(Appcontext);

const Provider = ({ children }) => {
  const [contador, setContador] = useState(0);

  const [compra, setCompra] = useState([{}]);

  return (
    // <Appcontext.Provider value={[contador, setContador]}>

    <Appcontext.Provider value={{ contador, setContador, compra, setCompra }}>
      {children}
    </Appcontext.Provider>
  );
};

export default Provider;
