import React from "react";
import { motion } from "framer-motion";
import { ArrowBack } from "@mui/icons-material";  // 👈 Cambiado aquí
import "./Home.css";
import homer from "../../assets/Familia_S.png";

const Home = () => {
  return (
    <div className="home-container">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Imagen animada */}
        <motion.img
          src={homer}
          alt="Familia Simpson"
          className="home-img"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Título */}
        <motion.h1
          className="home-title"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          ¡Bienvenido a Springfield!
        </motion.h1>

        {/* Flecha animada apuntando al NavBar (izquierda) */}
        <motion.div
          className="arrow-icon"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: [0, -15, 0] }}
          transition={{
            delay: 2,
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowBack sx={{ fontSize: 70, color: "#0400ffff" }} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
