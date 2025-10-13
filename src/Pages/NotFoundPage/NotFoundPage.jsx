import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";
import pensando from '../../assets/homero.png'

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <img
          src={pensando}
          alt="Homer confused"
          className="notfound-img"
        />
        <h1 className="notfound-title">¡D'oh! Página no encontrada</h1>
        <p className="notfound-text">
          La página que intentas visitar no existe o fue movida.
        </p>
       
      </div>
    </div>
  );
};

export default NotFoundPage;
