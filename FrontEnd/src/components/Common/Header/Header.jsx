import React from "react";
import "./Header.css";
import UCALogo from "../../../assets/images/UCA.png";

const Header = ({message}) => {
    console.log(message)
  return (

    <header className="header">
      <img
        className="header-logo"
        src={UCALogo}
        alt="Centro Polideportivo UCA"
      />
      <div className="header-text">
        <h1 className="header-title">
          Universidad Centroamericana José Simeón Cañas
        </h1>
        <p className="header-subtitle">
            {message}
        </p>
      </div>
    </header>
  );
};

export default Header;
