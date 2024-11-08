import React, { useState } from "react";
import "./NavVar.css";

import { Link, NavLink } from "react-router-dom";

const NavVar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fa-solid fa-bars menu-bar"></i>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/services">Historial</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Entrenos</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Página oficial</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavVar;
