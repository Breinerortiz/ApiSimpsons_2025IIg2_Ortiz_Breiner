import { useState, useEffect } from "react";
import CardCharacters from '../../Components/CardCharacters/CardCharacters'// usa la card MUI
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 10;

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results || []))
      .catch((error) => console.error("Error al obtener personajes:", error));
  }, []);

  // Calcular personajes por página
  const indexOfLast = currentPage * charactersPerPage;
  const indexOfFirst = indexOfLast - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirst, indexOfLast);

  // Cambiar página
  const nextPage = () => {
    if (currentPage < Math.ceil(characters.length / charactersPerPage))
      setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        height: "calc(100vh - 150px)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
        padding: "20px",
      }}
    >
      <h2>Personajes de Los Simpsons</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
          marginTop: "20px",
        }}
      >
        {currentCharacters.length > 0 ? (
          currentCharacters.map((character) => (
            <Link
              key={character.id}
              to={`/personaje/${character.id}`}
              style={{ textDecoration: "none" }}
            >
              <CardCharacters data={character} />
            </Link>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>

      {/* Botones de paginación */}
      <div style={{ marginTop: "20px" }}>
        <Button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </Button>
        <Button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(characters.length / charactersPerPage)}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default CharactersPage;
