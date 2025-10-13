import React from "react";
import { motion } from "framer-motion"; // 👈 agregado
import "./CardEpisode.css";

const CardEpisode = ({ data }) => {
  return (
    // 👇 Único cambio: motion.div en lugar de div
    <motion.div
      className="episode-card"
      initial={{ opacity: 0, y: 30 }}          // 👈 animación de entrada
      animate={{ opacity: 1, y: 0 }}           
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.5 }}             // 👈 efecto hover
    >
      <img
        src={`https://cdn.thesimpsonsapi.com/500${data.image_path}`}
        alt={data.name}
        className="details-img"
      />  

      <h3 className="episode-name">{data.name}</h3>
      
      <p className="episode-info">
        <strong>Temporada:</strong> {data.season || "?"}
      </p>
      <p className="episode-info">
        <strong>Episodio:</strong> {data.episode_number || "?"}
      </p>
      <p className="episode-info">
        <strong>Fecha de emisión:</strong> {data.airdate || "Desconocida"}
      </p>
    </motion.div>
  );
};

export default CardEpisode;
