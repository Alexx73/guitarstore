import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
// import instrumentos from "../data/instrumentos.json";
import InstumentosCard from "./InstumentosCard";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";

import { miContext } from "../aplicacion/Provider";

const ItemListContainer = ({ greeting }) => {
  // 1- Configurar Hooks
  const [instrumentos, setInstrumentos] = useState([]);
  const [bajos, setBajos] = useState([]);
  const [guitarras, setGuitarras] = useState([]);
  const [accesorios, setAccesorios] = useState([]);

  const { instrumentos2, setInstrumentos2 } = miContext();
  // const [cantidad, setCantidad] = miContext(0);

  const bajo_electrico = "Bajo eléctrico";
  const Guitarra = "Guitarra eléctrica";
  const Accesorio = "accesorios";

  // 2 - referenciar DB */}
  const instrumentosCollection = collection(db, "instrumentos2");

  // 3- funcion para mostrar los documentos */}
  const getInstrumentos = async () => {
    const data = await getDocs(instrumentosCollection);
    // await data.docs.foreach((doc) => console.log(...doc.data()));

    setInstrumentos2(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    setInstrumentos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setBajos(
      data.docs.filter((bajo) => bajo.data().categoria == bajo_electrico)
    );

    setGuitarras(
      data.docs.filter((guitarra) => guitarra.data().categoria == Guitarra)
    );

    setAccesorios(
      data.docs.filter((accesorio) => accesorio.data().categoria == Accesorio)
    );

    // console.log("instrumentos" + instrumentos);

    console.log("bajos " + bajos);
    console.log("instrumentos2 :", instrumentos2);
  };
  // 6- useEffect
  useEffect(() => {
    getInstrumentos();
  }, []);

  return (
    <main>
      <h2 id="item-list-container">{greeting}</h2>
      <ul className="instrumentos_Grid">
        {accesorios.map((instrumento) => (
          <InstumentosCard
            key={instrumento.id}
            instrumento={instrumento.data()}
          />
        ))}
      </ul>
    </main>
  );
};

export default ItemListContainer;
