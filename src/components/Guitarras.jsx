import React from "react";
import instrumentos from "../data/instrumentos.json";
import InstumentosCard from "./InstumentosCard";
import "./Guitarras.css";

const Guitarras = ({}) => {
  const categoria = "Guitarra eléctrica";

  const guitarras = instrumentos.filter(
    (guitarra) => categoria == guitarra.categoria
  );
  console.log(guitarras);
  return (
    <div>
      <h6 className="title">Guitarras</h6>
      <ul className="instrumentos_Grid">
        {guitarras.map((guitarra) => (
          <InstumentosCard instrumento={guitarra} />
        ))}
      </ul>
    </div>
  );
};

export default Guitarras;
