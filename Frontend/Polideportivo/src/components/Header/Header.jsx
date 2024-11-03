import React from 'react';
import './Header.css'
import UCALogo from '../../assets/images/UCA.png';

const Header = () => {
    return (
        <header style={{ backgroundColor: '#003366', padding: '1em', color: '#fff', textAlign: 'center' }}>
            <img className={'logo'} src={UCALogo} alt="Centro Polideportivo UCA" style={{ height: '80px' }} />
            <h1>Centro Polideportivo UCA</h1>
            <p>Mantente informado sobre todos los eventos deportivos de la semana.</p>
        </header>
    );
};

export default Header;
