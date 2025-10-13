import React from "react";
import { motion } from "framer-motion"; // 👈 Importa Framer Motion
import "./CardCharacters.css";

const CardCharacters = ({ data }) => {
  return (
    <motion.div
      className="character-card"
       
      initial={{ opacity: 0, y: 30 }}         // 👈 Aparece desde abajo
      animate={{ opacity: 1, y: 0 }}          // 👈 Sube suavemente
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.5 }}    
      
      
     
     
    >
      <img
        src={`https://cdn.thesimpsonsapi.com/500${data.portrait_path}`}
        alt={data.name}
        className="character-img"
      />
      <h2 className="character-name">{data.name}</h2>
      <p className="character-job">{data.occupation}</p>
    </motion.div>
  );
};

export default CardCharacters;
