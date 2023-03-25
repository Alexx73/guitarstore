import React from "react";
// import instrumentos from "../data/instrumentos.json";
import InstumentosCard from "./InstumentosCard";
import "./Guitarras.css";
import { miContext } from "../aplicacion/Provider";

const Guitarras = ({}) => {
  const categoria = "Guitarra eléctrica";

  const { instrumentos2, setInstrumentos2 } = miContext();

  const guitarras = instrumentos2.filter(
    (guitarra) => categoria == guitarra.categoria
  );
  console.log(guitarras);
  return (
    <div>
      <h6 className="title">Guitarras</h6>
      <ul className="instrumentos_Grid">
        {guitarras.map((guitarra) => (
          <InstumentosCard key={guitarra.id} instrumento={guitarra} />
        ))}
      </ul>
    </div>
  );
};

export default Guitarras;
