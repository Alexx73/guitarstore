import React from "react";
// import instrumentos from "../data/instrumentos.json";
import InstumentosCard from "./InstumentosCard";
import "./Bajos.css";
import { miContext } from "../aplicacion/Provider";

const Bajos = () => {
  const categoria = "Bajo eléctrico";
  const { instrumentos2, setInstrumentos2 } = miContext();

  const bajos = instrumentos2.filter((bajo) => categoria == bajo.categoria);
  // console.log("bajos" + bajos);
  console.log("Instrumentos2 :", instrumentos2);
  return (
    <div className="">
      <h6 className="title">Bajos</h6>
      <ul className="instrumentos_Grid">
        {bajos.map((bajo) => (
          <InstumentosCard key={bajo.id} instrumento={bajo} />
        ))}
      </ul>
    </div>
  );
};

export default Bajos;
