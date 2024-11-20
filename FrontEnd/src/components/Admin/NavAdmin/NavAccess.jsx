import React from 'react';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import './NavAccess.css'

const NavAccess = () => {
    const location = useLocation(); // Obtén la ruta actual
    return (
        <div className={'tab-container'}>
            <button className={location.pathname === "/register" ? "active" : ""}><Link to="/register">Crear Cuenta </Link></button>
            <button className={location.pathname === "/login" ? "active" : ""}><Link to="/login">Iniciar Sesión </Link></button>
        </div>
    )
}
export default NavAccess;