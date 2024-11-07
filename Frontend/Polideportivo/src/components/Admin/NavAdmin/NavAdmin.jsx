import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavAdmin.css';

const NavAdmin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Función para verificar si el botón está activo según la ruta
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="nav flex justify-between">
            <div className="icons-container flex items-center">
                <button 
                    className={`p-2 rounded-full option ${isActive('/admin/home') ? 'active' : ''}`} 
                    onClick={() => navigate('/admin/home')} 
                    title={'Inicio'}
                >
                    <i className="fa-solid fa-house text-white"></i>
                </button>
                <button 
                    className={`p-2 rounded-full option ${isActive('/admin/history') ? 'active' : ''}`} 
                    onClick={() => navigate('/admin/history')} 
                    title={'Historial de partidos'}
                >
                    <i className="fas fa-clock-rotate-left text-white"></i>
                </button>
                <button 
                    className={`p-2 rounded-full option ${isActive('/admin/matches') ? 'active' : ''}`} 
                    onClick={() => navigate('/admin/matches')} 
                    title={'Partidos'}
                >
                    <i className="fas fa-futbol text-white"></i>
                </button>
                <button 
                    className={`p-2 rounded-full option ${isActive('/admin/trainings') ? 'active' : ''}`} 
                    onClick={() => navigate('/admin/trainings')} 
                    title={'Entrenos'}
                >
                    <i className="fas fa-person-running text-white"></i>
                </button>
                <button 
                    className={`p-2 rounded-full option ${isActive('/admin/universities') ? 'active' : ''}`} 
                    onClick={() => navigate('/admin/universities')} 
                    title={'Universidades'}
                >
                    <i className="fa-solid fa-building-columns text-white"></i>
                </button>
                <button className="log-out bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
                    <p>Cerrar Sesión</p>
                </button>
            </div>
        </nav>
    );
};

export default NavAdmin;
