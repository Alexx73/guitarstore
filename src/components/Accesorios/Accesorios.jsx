import React from "react";

import InstumentosCard from "../InstumentosCard";

import "../../data/instrumentos.json";

import "./Accesorios.css";
import { miContext } from "../../aplicacion/Provider";

miContext;

const Accesorios = () => {
  const categoria = "accesorios";

  const { instrumentos2, setInstrumentos2 } = miContext();

  const accesorios = instrumentos2.filter(
    (instrumento) => categoria == instrumento.categoria
  );
  console.log("Accesorios", instrumentos2);
  return (
    <div>
      <h6 className="title">Accesorios</h6>
      <ul className="instrumentos_Grid">
        {accesorios.map((instrumento) => (
          <InstumentosCard key={instrumento.id} instrumento={instrumento} />
        ))}
      </ul>
    </div>
  );
};

export default Accesorios;
