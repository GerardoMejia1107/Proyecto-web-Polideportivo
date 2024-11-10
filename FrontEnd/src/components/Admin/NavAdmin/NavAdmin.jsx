import React from "react";
import {useNavigate} from "react-router-dom";
import "./NavAdmin.css";

const NavAdmin = () => {
    const navigate = useNavigate();

    return (
        <nav className="nav flex justify-between ">
            <div className="icons-container flex items-center ">
                <button
                    className="p-2 rounded-full option"
                    onClick={() => {
                        navigate("/admin/home");
                    }}
                    title={"Historial de partidos"}
                >
                    <i className="fa-solid fa-house text-white"></i>
                </button>

                <button
                    className="p-2 rounded-full option"
                    onClick={() => {
                        navigate("/admin/matches");
                    }}
                    title={"Partidos"}
                >
                    <i className="fas fa-futbol text-white"></i>
                </button>


                <button
                    className="p-2 rounded-full option"
                    onClick={() => {
                        navigate("/admin/trainings");
                    }}
                    title={"Entrenos"}
                >
                    <i className="fas fa-person-running text-white"></i>
                </button>
                <button
                    className="p-2 rounded-full option"
                    onClick={() => {
                        navigate("/admin/history");
                    }}
                    title={"Historial de partidos"}
                >
                    <i className="fas fa-clock-rotate-left text-white"></i>
                </button>
                <button
                    className="p-2 rounded-full option"
                    onClick={() => {
                        navigate("/admin/universities");
                    }}
                    title={"Universidades"}
                >
                    <i className="fa-solid fa-building-columns text-white"></i>
                </button>
                <button className="log-out  bg-gray-100  px-3 py-1 rounded-lg hover:bg-gray-200">
                    Cerrar Sesión
                </button>
            </div>
        </nav>
    );
};

export default NavAdmin;
