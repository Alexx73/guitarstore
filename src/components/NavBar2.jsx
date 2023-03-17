import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar2.css";
import logo from "../img/guitar-logo.png";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { miContext } from "../aplicacion/Provider";

const NavBar2 = () => {
  // const [cantidad, setCantidad] = miContext();
  const { contador, setcontador } = miContext();

  // console.log("cantidad: " + contador);
  return (
    <header className="header inline navbar">
      {/* <Link to="/"> */}
      <div className="logo inline">
        <Link to={"/"}>
          <img className="logo inline" src={logo} alt="" />
        </Link>
      </div>
      {/* </Link> */}

      {/* <h3 className="logo-desc">Guitar Store</h3> */}

      <nav className="">
        <ul className="nav-links">
          <li>
            <Link to={"/"}>Inicio</Link>
            {/* <a href="#">Inicio</a> */}
          </li>
          <li>
            <Link to={"/guitarras"}>Guitarras</Link>
          </li>
          <li>
            <Link to={"/bajos"}>Bajos</Link>
          </li>

          <li>
            <Link to={"/accesorios"}>Accesorios</Link>
          </li>

          {/* <li>
            <Link to={"/carrito"}>carrito</Link>
          </li> */}
        </ul>
      </nav>
      {/* <a class="btn" href="#">
        <button>Contact</button>
      </a> */}

      <Link to={"/carrito"}>
        <ShoppingCartIcon className="cart" color="primary" />
        <p className="qty">{contador} </p>
      </Link>

      {/* <CartWidget /> */}
    </header>
  );
};

export default NavBar2;
