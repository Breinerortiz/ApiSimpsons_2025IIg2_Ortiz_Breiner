import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CharacterDetails.css";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) return <p className="loading">Cargando...</p>;

  return (
    <div className="details-container">
      <div className="details-card">
        <img
          src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
          alt={character.name}
          className="details-img"
        />

        <h1 className="details-name">{character.name}</h1>
        <h3 className="details-occupation">{character.occupation}</h3>

        <div className="details-info">
          <p>
            <strong>Edad:</strong> {character.age}
          </p>
          <p>
            <strong>Estado:</strong>{" "}
            <span
              className={`status ${
                character.status === "Alive" ? "alive" : "dead"
              }`}
            >
              {character.status}
            </span>
          </p>
          {character.phrases && character.phrases.length > 0 && (
            <p className="quote">"{character.phrases[0]}"</p>
          )}
        </div>

        <Link to="/personajes" className="back-btn">
          ← Volver
        </Link>
      </div>
    </div>
  );
};

export default CharacterDetails;
