import React, { useEffect } from "react";
import "./InstumentosCard.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { db } from "../firebaseConfig/firebase.js";
import Button from "@mui/material/Button";

const InstumentosCard = ({ instrumento }) => {
  console.log(instrumento);
  return (
    <li className="movieCard">
      <Link to={`/info/${instrumento.id}`}>
        <img className="movieImage" src={instrumento.poster_path} />
      </Link>

      <div>
        <h3>{instrumento.nombre}</h3>
      </div>
    </li>
  );
};

export default InstumentosCard;
