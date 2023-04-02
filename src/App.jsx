import "./App.css";
// import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import CartWidget from "./components/CartWidget";
import Bajos from "./components/Bajos";
import Info from "./components/Info";
import Guitarras from "./components/Guitarras";
import Accesorios from "./components/Accesorios/Accesorios";
import NavBar2 from "./components/NavBar2";
import Checkout from "./components/Checkout";

//   -----    Context ------
import Provider from "./aplicacion/Provider";
import Footer from "./components/footer/footer";

function App() {
  return (
    // <NavBar2 />
    <div className="Ap">
      <Provider>
        {/* *** */}
        <BrowserRouter>
          <NavBar2 />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ItemListContainer greeting={"Bienvenidos a Guitar Store !!"} />
              }
            />
            <Route path="/bajos" element={<Bajos />} />
            <Route path="/guitarras" element={<Guitarras />} />
            <Route exact path="/accesorios" element={<Accesorios />} />
            <Route exact path="/info/:id" element={<Info />} />
            <Route exact path="/carrito" element={<CartWidget />} />+
            <Route exact path="/checkout" element={<Checkout />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
