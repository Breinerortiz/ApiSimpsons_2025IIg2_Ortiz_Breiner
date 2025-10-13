import React, { useState } from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom'


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`navbar ${isOpen ? "open" : "closed"}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="nav-header">
        <h2>{isOpen ? "mi sitio de trabajo" : "MS"}</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/personajes">Personajes</Link></li>
        <li><Link to="/localizacion">Lugares</Link></li>
        <li><Link to="/episodios">Episodios</Link></li>

      </ul>
    </nav>
  );
};

export default NavBar;
