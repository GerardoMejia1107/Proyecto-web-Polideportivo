import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-social">
                <FaFacebook className="footer-icon" />
                <FaTwitter className="footer-icon" />
                <FaInstagram className="footer-icon" />
            </div>
            <div className="footer-info">
                <h2 className="footer-title">Universidad Centroamericana José Simeón Cañas</h2>
                <p className="footer-address">Bulevar Los Próceres, Antiguo Cuscatlán, La Libertad, El Salvador, Centroamérica</p>
                <p className="footer-hours">Horario de atención administrativa: Lunes a viernes, de 8:00 a.m. a 12 del mediodía y de 1:00 a 5:45 p.m</p>
                <p className="footer-phone">(503) 2210-6600</p>
                <p className="footer-email">direccion.comunicaciones@uca.edu.sv</p>
            </div>
        </footer>
    );
};

export default Footer;
