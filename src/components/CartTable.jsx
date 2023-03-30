import React, { useState } from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

//

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Button from "@mui/material/Button";
import { miContext } from "../aplicacion/Provider";
import { useNavigate } from "react-router-dom";

const CartTable = () => {
  const { contador, setContador } = miContext();
  const { compra, setCompra } = miContext();
  const [total_compra, setTotal_compra] = useState(0);
  const { total, setTotal } = miContext();

  console.log(compra);

  const navigate = useNavigate();

  const handleCheckout = () => {
    // console.log("ir a carrito");

    navigate("/checkout");
  };
  // REvisar, no borra el ultimo elemento
  const handleDelete = (id) => {
    // setTotal(total - del.precio);
    // compra.find((item) => i);
    let restar = compra.find((item) => item.id == id);

    console.log("restar: ", restar.precio);

    setTotal(total - parseInt(restar.precio));

    console.log("restar: ", restar);
    let del = compra.filter((item) => {
      item.id != id;
      console.log(id);
    });
    setCompra(del);
    setContador(contador - 1);

    // if (compra == "undefined" || compra.length < 1) {
    //   setCompra([]);
    //   setContador(0);
    //   setTotal(0);

    //   // navigate("/");
    // } else {
    //   setCompra(del);
    //   setContador(contador - 1);
    // }

    // console.log("del.lenght despues: ", del.length);

    console.log("delete item", id);
    console.log("type id: ", typeof id);

    // let del = compra.filter((item) =>
    //   console.log(
    //     "type item.id : ",
    //     typeof item.id,
    //     "igualdad: ",
    //     id == item.id
    //   )
    // );

    console.log("arrayDel:", del);

    // console.log(id == item.id);

    // console.log("del:", del);
    console.log("compra : ", compra);
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Item</TableCell>
              <TableCell align="left">Descripcion</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left">Precio</TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Map */}
            {compra.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row"></TableCell> */}
                <TableCell align="left">
                  <img
                    className="imgSm"
                    // src="https://firebasestorage.googleapis.com/v0/b/crudcoder-544fb.appspot.com/o/bass_fender-american.jpg?alt=media&token=46f6059d-ea25-4413-b484-833234117d23"
                    alt=""
                    src={item.poster_path}
                  />
                </TableCell>
                <TableCell align="left">{item.nombre}</TableCell>
                <TableCell align="center">
                  {/* <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">
        cantidad
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={contador}
        label="cantidad"
        onChange={handleChange}
      >
        <MenuItem value={10}>1</MenuItem>
        <MenuItem value={20}>2</MenuItem>
        <MenuItem value={30}>3</MenuItem>
      </Select>
    </FormControl> */}

                  {/* <button id="sub">+</button>

    <input type="text" readOnly value="0" style="width: 5px;" />
    <button id="sub">-</button> */}

                  {contador}
                </TableCell>

                <TableCell align="center">
                  <DeleteForeverIcon
                    className="hoover"
                    onClick={() => handleDelete(item.id)}
                    color="primary"
                    style={{ fontSize: [45] }}
                  />
                </TableCell>

                <TableCell align="left">{item.precio}</TableCell>

                {/* <TableCell align="right">{4}</TableCell> */}
              </TableRow>

              //   total -
            ))}

            {/* Fin  Map */}

            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>

              <TableCell align="center">total</TableCell>
              <TableCell align="center">
                {" "}
                <h4 align="left"> {total}</h4>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* <h4 align="right"> {100000}</h4> */}
      </TableContainer>

      <Button onClick={handleCheckout} variant="contained">
        Checkout
      </Button>
    </div>
  );
};

export default CartTable;
