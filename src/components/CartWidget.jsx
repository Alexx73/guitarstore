import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./CartWidget.css";
import { Navigate } from "react-router-dom";

import instrumentos from "../data/instrumentos.json";

//  ---

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Button from "@mui/material/Button";
import { miContext } from "../aplicacion/Provider";
import CartTable from "./CartTable";

// -----

const CartWidget = ({}) => {
  const [age, setAge] = useState("");

  const { contador, setContador } = miContext();
  const { compra, setCompra } = miContext();
  const [total_compra, setTotal_compra] = useState(0);

  let total = 0;

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleDelete = (id) => {
    console.log("delete item", id);
    let del = compra.filter((item) => item.id == id);

    console.log("compra del: ", del);
  };

  // console.log("compra : ", compra);
  // console.log("compra : ", compra[0].nombre);

  return (
    // <div className="cart-widget">
    //   <h2 className="title">Carrito</h2>
    //   <p className="title"> este es tu carrito</p>
    // </div>

    <div className="cart-widget">
      <h6 className="title">Mi Carrito</h6>

      {contador <= 0 || !contador ? (
        <Box
          m={4}
          //margin
          align="center"
          justify="center"
          alignItems="center"
        >
          <h3>tu carrito está vacio</h3>

          <ProductionQuantityLimitsIcon
            className="empty"
            color="primary"
            style={{ fontSize: [110] }}
            sx={{ paddingTop: 1, mt: 4 }}
          ></ProductionQuantityLimitsIcon>
        </Box>
      ) : (
        // <h2>tu carrito está vacio</h2>
        <CartTable />
      )}
    </div>
  );
};

export default CartWidget;
