import React from "react";

import InstumentosCard from "../InstumentosCard";

import "../../data/instrumentos.json";

import "./Accesorios.css";

const Accesorios = () => {
  const categoria = "Accesorios";

  const accesorios = instrumentos.filter(
    (instrumento) => categoria == instrumento.categoria
  );
  console.log("Accesorios", accesorios);
  return (
    <div>
      <h6 className="title">Guitarras</h6>
      <ul className="instrumentos_Grid">
        {accesorios.map((accesorio) => (
          <InstumentosCard accesorio={accesorio} />
        ))}
      </ul>
    </div>
  );
};

export default Accesorios;
