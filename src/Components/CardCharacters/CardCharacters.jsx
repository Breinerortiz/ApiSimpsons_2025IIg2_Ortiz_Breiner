import React from "react";
import "./CardCharacters.css";

const CardCharacters = ({ data }) => {
  return (
    <div className="character-card">
      <img
        src={`https://cdn.thesimpsonsapi.com/500${data.portrait_path}`}
        alt={data.name}
        className="character-img"
      />
      <h2 className="character-name">{data.name}</h2>
      <p className="character-job">{data.occupation}</p>

      
          
        
          
      </div>

      
   
  );
};

export default CardCharacters;
