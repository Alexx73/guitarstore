import React from "react";
import instrumentos from "../data/instrumentos.json";
import InstumentosCard from "./InstumentosCard";
import "./Bajos.css";

const Bajos = () => {
  const categoria = "Bajo eléctrico";

  const bajos = instrumentos.filter((bajo) => categoria == bajo.categoria);
  console.log("bajos" + bajos);
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
