import { useState, useEffect } from "react";
import CardLocation from "../../Components/CardLocation/CardLocation"; // tu componente de tarjeta
import { Button } from "@mui/material";

const LocationPage = () => {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const locationsPerPage = 10;

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/locations")
      .then((response) => response.json())
      .then((data) => setLocations(data.results || []))
      .catch((error) => console.error("Error al obtener locaciones:", error));
  }, []);

  // Calcular locaciones por página
  const indexOfLast = currentPage * locationsPerPage;
  const indexOfFirst = indexOfLast - locationsPerPage;
  const currentLocations = locations.slice(indexOfFirst, indexOfLast);

  // Cambiar página
  const nextPage = () => {
    if (currentPage < Math.ceil(locations.length / locationsPerPage))
      setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        height: "calc(100vh - 150px)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
        padding: "20px",
      }}
    >
      <h2>Locaciones de Los Simpsons</h2>

      {/* Contenedor de tarjetas */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
          marginTop: "20px",
        }}
      >
        {currentLocations.length > 0 ? (
          currentLocations.map((location) => (
            <CardLocation key={location.id} data={location} />
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
          disabled={currentPage === Math.ceil(locations.length / locationsPerPage)}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default LocationPage;
