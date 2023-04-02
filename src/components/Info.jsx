import React from "react";
import { useParams } from "react-router-dom";
import instrumentos from "../data/instrumentos.json";
import "./info.css";
import Button from "@mui/material/Button";

//   MUI

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// ----

import { miContext } from "../aplicacion/Provider";

const Info = () => {
  const { contador, setContador } = miContext();
  const { compra, setCompra } = miContext();
  const { total, setTotal } = miContext();
  const { instrumentos2, setInstrumentos2 } = miContext();

  let params = useParams();
  let { id } = useParams();
  console.log(params);

  const obj = instrumentos2.find((obj) => obj.id == id);
  console.log(obj.poster_path);

  const addToCart = () => {
    setContador(contador + 1);
    if (compra.includes(obj)) {
      console.log(obj);
    }
    setCompra([...compra, obj]);
    setTotal(total + obj.precio);
    console.log("obj precio: ", obj.precio);
    // setCompra({ ...compra, item: { id: 1, nombre: "bajo loco" } });
    console.log("contador : ", contador);
    console.log("compra : ", compra);
  };

  return (
    <card className="container ">
      <div className="cadImg inline">
        {/* <CardMedia
          className=" img"
          component="img"
          alt="green iguana"
          height="250"
          image={obj.poster_path}
        /> */}
        <img className="img" src={obj.poster_path} alt="" />
      </div>

      <div className="container cardInfo inline">
        <CardContent className="inline">
          <Typography gutterBottom variant="h5" component="div">
            {obj.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {obj.descripcion}
          </Typography>
          <p>{obj.precio}</p>
          <Typography variant="h6" color="text.secondary"></Typography>
        </CardContent>
        {/* <h2> {obj.nombre} </h2>
        <h4> {obj.precio} </h4>
        <h5> {obj.descripcion} </h5> */}
        <Button onClick={addToCart} variant="contained">
          Agregar +
        </Button>
      </div>
    </card>
  );
};

export default Info;
