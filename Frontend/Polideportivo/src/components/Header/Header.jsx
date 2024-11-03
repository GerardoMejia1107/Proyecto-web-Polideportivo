import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header style={{ backgroundColor: '#003366', padding: '1em', color: '#fff', textAlign: 'center' }}>
            <img src="/path/to/logo.png" alt="Centro Polideportivo UCA" style={{ height: '80px' }} />
            <h1>Centro Polideportivo UCA</h1>
            <p>Mantente informado sobre todos los eventos deportivos de la semana.</p>
        </header>
    );
};

export default Header;
