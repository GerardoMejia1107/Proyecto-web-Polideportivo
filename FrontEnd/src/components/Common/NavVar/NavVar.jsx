import React, { useState } from "react";
import "./NavVar.css";
import { useNavigate } from "react-router-dom";



const NavVar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fa-solid fa-bars menu-bar"></i>
      </div>
        <ul className={menuOpen ? "open" : ""}>
            <li onClick={() => {
                navigate("/user/home")
            }}>
                Inicio
            </li>
            <li onClick={() => {
                navigate("/user/history")
            }}>
                Historial
            </li>
            <li onClick={() => {
                navigate("/user/trainings")
            }}>
                Entrenos
            </li>
            <li >
               <a href={'https://uca.edu.sv/'} target={'_blank'}> Página Oficial</a>
            </li>

        </ul>
    </nav>
  );
};

export default NavVar;
