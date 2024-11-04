import React from 'react';
import UCALogo from '../../assets/images/UCA.png';
import './HeaderAdmin.css';

const HeaderAdmin = () => {
    return (
        <header className="header flex justify-between ">
            <div className="icons-container flex items-center ">
                <button className="p-2 rounded-full option">
                    <i className="fas fa-building-columns text-white"></i>
                </button>
                <button className="p-2 rounded-full option">
                    <i className="fas fa-clock-rotate-left text-white"></i>
                </button>
                <button className="p-2 rounded-full option">
                    <i className="fas fa-futbol text-white"></i>
                </button>
                <button className="p-2 rounded-full option">
                    <i className="fas fa-person-running text-white"></i>
                </button>
                <button className="p-2 rounded-full option">
                    <i className="fa-solid fa-building-columns text-white"></i>
                </button>
                <button className="log-out  bg-gray-100  px-3 py-1 rounded-lg hover:bg-gray-200">
                    <p>Cerrar Sesión</p>
                </button>
            </div>
        </header>
    );
};

export default HeaderAdmin;
