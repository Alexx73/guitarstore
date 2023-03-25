import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import DialogBox from "./DialogBox";

// Dialog Box
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Checkout = () => {
  const [open, setOpen] = React.useState(false);

  // const form_nombre = document.getElementById("#nombre").value;
  // const form_apellido = document.getElementById("#apellido").value;

  const handleFinalizar = () => {
    // setOpen(true);
    const venta2 = {
      id: "",
      nombre: form_nombre,
      apellido: form_apellido,
    };

    console.log("Finalizar compra", venta2);
  };

  const handleClose = () => {
    const [venta, setVenta] = useState({});
    setOpen(false);
  };

  const envio = [
    {
      value: "$ 30",
      label: "normal",
    },
    {
      value: "$ 50",
      label: "premium",
    },
  ];

  const pago = [
    {
      value: "$ 30",
      label: "Visa",
    },
    {
      value: "$ 50",
      label: "Master Card",
    },
  ];
  return (
    <div>
      <p>q </p>
      <p> q</p>
      <p>q </p>

      <h2>Checkout</h2>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField required id="nombre" label="Nombre" defaultValue="" />
          <TextField required id="apellido" label="Apellido" defaultValue="" />

          <TextField
            required
            id="direccion"
            label="Direccion"
            defaultValue=""
          />

          <TextField required id="ciudad" label="Ciudad" defaultValue="" />
          <TextField
            required
            id="provincia"
            label="Provincia"
            defaultValue=""
          />

          <TextField
            required
            id="pago"
            select
            label="Metodo de pago"
            // defaultValue="EUR"
            helperText="Elija el metodo de pago"
          >
            {pago.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {/* <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          /> */}
          <TextField
            id="outlined-read-only-input"
            label="Total"
            defaultValue="250000"
            InputProps={{
              readOnly: true,
            }}
          />

          <TextField
            required
            id="envio"
            select
            label="Envio"
            defaultValue="EUR"
            helperText="Elija el tipo de envio"
          >
            {envio.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          {/* <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
          >
            {pago.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField> */}
          {/* <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          /> */}
          {/* <TextField id="outlined-search" label="Search field" type="search" /> */}
          {/* <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          /> */}
        </div>
      </Box>

      <Button onClick={handleFinalizar} variant="contained">
        Finalizar compra
      </Button>

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

// {open ? <DialogBox /> : console.log(2)}
