// src/components/Footer.js
import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#003366', color: '#fff', padding: '2em', textAlign: 'center' }}>
            <p>Universidad Centroamericana José Simeón Cañas</p>
            <p>Bulevar Los Próceres, Antiguo Cuscatlán, El Salvador</p>
            <p>Horario de atención administrativa: Lunes a viernes, de 8:00 a.m. a 5:45 p.m.</p>
            <p>Teléfono: (503) 2210-6600 | Email: direccion.comunicaciones@uca.edu.sv</p>
        </footer>
    );
};

export default Footer;
