import React from "react";
import "./CardLocation.css";

const CardLocation = ({ data }) => {
  return (
    <div className="location-card">
      <img
        src={`https://cdn.thesimpsonsapi.com/500${data.image_path}`}
        alt={data.name}
        className="location-img"
      />

      <h2 className="location-name">{data.name}</h2>

      <p className="location-use">
        {data.use ? data.use : "Ubicación sin descripción"}
      </p>
    </div>
  );
};

export default CardLocation;
