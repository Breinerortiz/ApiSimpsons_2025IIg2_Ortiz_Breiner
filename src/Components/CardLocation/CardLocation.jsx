import React from "react";
import { motion } from "framer-motion"; // 👈 Agregamos esta línea
import "./CardLocation.css";

const CardLocation = ({ data }) => {
  return (
    <motion.div
      className="location-card"
      initial={{ opacity: 0, y: 30 }}         // 👈 Aparece desde abajo
      animate={{ opacity: 1, y: 0 }}          // 👈 Sube suavemente
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.5 }}            // 👈 Efecto al pasar el mouse
    >
      <img
        src={`https://cdn.thesimpsonsapi.com/500${data.image_path}`}
        alt={data.name}
        className="location-img"
      />

      <h2 className="location-name">{data.name}</h2>

      <p className="location-use">
        {data.use ? data.use : "Ubicación sin descripción"}
      </p>
    </motion.div>
  );
};

export default CardLocation;
