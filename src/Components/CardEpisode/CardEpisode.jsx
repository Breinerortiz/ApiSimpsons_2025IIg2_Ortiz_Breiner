import React from "react";
import "./CardEpisode.css";

const CardEpisode = ({ data }) => {
  return (

    <div className="episode-card">
       
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
        <strong>Fecha de emisión:</strong> {data.airdate|| "Desconocida"}
      </p>
    </div>
  );
};

export default CardEpisode;
