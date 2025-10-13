import { useState, useEffect } from "react";
import CardEpisode from "../../Components/CardEpisode/CardEpisode";
import { Button, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const episodesPerPage = 10;

  useEffect(() => {
    fetch("https://thesimpsonsapi.com/api/episodes")
      .then((response) => response.json())
      .then((data) => {
        const list = data.results || [];
        setEpisodes(list);
        setFilteredEpisodes(list);
      })
      .catch((error) => console.error("Error al obtener episodios:", error));
  }, []);

  // Filtrar por temporada
  const handleFilter = (season) => {
    setSelectedSeason(season);
    if (season === "") {
      setFilteredEpisodes(episodes);
    } else {
      const filtered = episodes.filter((ep) => ep.season == season);
      setFilteredEpisodes(filtered);
      setCurrentPage(1);
    }
  };

  // Paginación
  const indexOfLast = currentPage * episodesPerPage;
  const indexOfFirst = indexOfLast - episodesPerPage;
  const currentEpisodes = filteredEpisodes.slice(indexOfFirst, indexOfLast);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredEpisodes.length / episodesPerPage))
      setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Obtener todas las temporadas únicas
  const seasons = [...new Set(episodes.map((ep) => ep.season))];

  return (
    <div
      style={{
        backgroundColor: "#ffe082",
        height: "calc(100vh - 150px)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
        padding: "20px",
      }}
    >
      <h2>Lista de Episodios</h2>

      {/* Filtro por temporada */}
      <FormControl sx={{ minWidth: 200, marginTop: 2 }}>
        <InputLabel>Filtrar por temporada</InputLabel>
        <Select
          value={selectedSeason}
          onChange={(e) => handleFilter(e.target.value)}
          label="Filtrar por temporada"
        >
          <MenuItem value="">Todas</MenuItem>
          {seasons.map((season) => (
            <MenuItem key={season} value={season}>
              Temporada {season}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Listado de episodios */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          marginTop: "20px",
        }}
      >
        {currentEpisodes.length > 0 ? (
          currentEpisodes.map((episode) => (
            <CardEpisode key={episode.id} data={episode} />
          ))
        ) : (
          <p>Cargando episodios...</p>
        )}
      </div>

      {/* Paginación */}
      <div style={{ marginTop: "20px" }}>
        <Button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </Button>
        <Button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(filteredEpisodes.length / episodesPerPage)}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default EpisodesPage;
