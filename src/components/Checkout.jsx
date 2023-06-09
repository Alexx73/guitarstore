import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { miContext } from "../aplicacion/Provider";
import { db } from "../firebaseConfig/firebase";

import { collection, getDocs, setDoc, doc, addDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const VentasCollection = collection(db, "ventas");

  const [open, setOpen] = React.useState(false);
  const [textInput, setTextInput] = React.useState("");

  const total_compra = 350000;

  const [form_nombre, setForm_nombre] = React.useState("");
  const [form_apellido, setForm_apellido] = React.useState("");
  const [form_email, setForm_Email] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [telefono, setTelefono] = React.useState("");

  const [form_lleno, setForm_lleno] = React.useState(false);

  const { total, setTotal } = miContext();
  const { compra, setCompra } = miContext();
  const { contador, setContador } = miContext();

  const handleName = (event) => {
    event.preventDefault();
    setForm_nombre(event.target.value);
    console.log("nombre: ", form_nombre);
  };

  const handleFinalizar = () => {
    if (
      form_nombre == "" ||
      form_apellido == "" ||
      direccion == "" ||
      form_email == "" ||
      telefono == ""
    ) {
      console.log("debe llenar los campos");
      alert("debe llenar todos los campos");
    } else {
      const venta2 = {
        nombre: form_nombre,
        apellido: form_apellido,
        direccion: direccion,
        email: form_email,
        telefono: telefono,
        total: total_compra,
      };

      // Enviar a Firebase
      const agregarCompra = async () => {
        const data = await addDoc(
          VentasCollection,
          venta2

          //   {
          //   nombre: form_nombre,
          //   apellido: form_apellido,
          //   direccion: direccion,
          //   email: form_email,
          //   telefono: telefono,
          //   total: total_compra,
          // }
        );
      };

      agregarCompra();

      // await addDoc(productsCollection, {
      //   description: description,
      //   stock: stock,
      // });

      // const docRef = await addDoc(collection(db, "cities"), {
      //   name: "Tokyo",
      //   country: "Japan"
      // });

      // await setDoc(doc(db, "cities", "LA"), {
      //   name: "Los Angeles",
      //   state: "CA",
      //   country: "USA"
      // });

      alert("Gracias por su compra");

      console.log("Finalizar compra", venta2);
      setForm_nombre("");
      setForm_apellido("");
      setForm_Email("");
      setDireccion("");
      setTelefono("");
      setCompra([]);
      setTotal(0);
      setContador(0);
    }
    // setOpen(true);
  };

  // const handleClose = () => {
  //   const [venta, setVenta] = useState({});
  //   setOpen(false);
  // };

  return (
    <div className="cart-widget">
      <h2 className="title">Checkout</h2>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="center">
          <TextField
            mr={3}
            required
            id="nombre"
            label="Nombre"
            // defaultValue=""
            value={form_nombre}
            onChange={handleName}
          />
          <TextField
            required
            id="apellido"
            label="Apellido"
            // defaultValue=""
            value={form_apellido}
            onChange={(event) => setForm_apellido(event.target.value)}
          />
          <TextField
            required
            id="email"
            label="Email"
            // defaultValue=""
            value={form_email}
            onChange={(event) => setForm_Email(event.target.value)}
          />

          <TextField
            required
            id="direccion"
            label="Direccion"
            value={direccion}
            onChange={(event) => setDireccion(event.target.value)}
          />

          <TextField
            required
            id="telefono"
            label="Telefono"
            value={telefono}
            onChange={(event) => setTelefono(event.target.value)}
          />

          {/* <TextField
            required
            id="pago"
            select
            label="Metodo de pago"
            helperText="Elija el metodo de pago"
          >
            {pago.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField> */}

          <TextField
            id="outlined-read-only-input"
            label="Total Compra"
            value={total}
            InputProps={{
              readOnly: true,
            }}
          />

          {/* <TextField id="outlined-search" label="Search field" type="search" /> */}
          {/* <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          /> */}
        </div>
      </Box>

      <Box
        m={1}
        //margin
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        // sx={boxDefault}
      >
        {/* <Button onClick={handleCheckout} variant="contained">
          Checkout
        </Button> */}

        <Button
          disabled={form_lleno}
          onClick={handleFinalizar}
          variant="contained"
        >
          Finalizar compra
        </Button>
      </Box>

      {/* <Button
        disabled={form_lleno}
        onClick={handleFinalizar}
        variant="contained"
      >
        Finalizar compra
      </Button> */}

      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
};

export default Checkout;
