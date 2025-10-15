import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CharacterDetails.css";

const CharacterDetails = () => {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
      .then((res) => res.json())
      .then((data) => setPersonaje(data))
      .catch((err) => console.error("Error al obtener personaje:", err));
  }, [id]);

  if (!personaje) return <p className="loading">Cargando personaje...</p>;

  const frase =
    personaje.phrases && personaje.phrases.length > 0
      ? personaje.phrases[0]
      : "Este personaje no tiene registrada una frase célebre 😅";

  return (
    <div className="details-container">
      <div className="details-card">
        <img
          src={`https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`}
          alt={personaje.name}
          className="details-img"
        />

        <h1 className="details-name">{personaje.name}</h1>
        <h3 className="details-occupation">
          {personaje.occupation || "Ocupación no disponible"}
        </h3>

        <div className="details-info">
          <p>
            <strong>Edad:</strong> {personaje.age || "No especificada"}
          </p>
          <p>
            <strong>Estado:</strong>{" "}
            <span
              className={`status ${
                personaje.status === "Alive" ? "alive" : "dead"
              }`}
            >
              {personaje.status === "Alive"
                ? "Vivo"
                : personaje.status === "Deceased"
                ? "Fallecido"
                : "Desconocido"}
            </span>
          </p>

          {/* Frase célebre claramente indicada */}
          <p className="quote">
            <strong>Frase célebre:</strong> {frase}
          </p>
        </div>

        <Link to="/personajes" className="back-btn">
          ← Volver
        </Link>
      </div>
    </div>
  );
};

export default CharacterDetails;
