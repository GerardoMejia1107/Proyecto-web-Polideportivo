import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/userContext.jsx"; // Update the path based on your project
import "./NavAdmin.css";

const NavAdmin = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleLogout = async () => {
        try {
            await fetch("http://localhost:3000/api/auth/logout", {
                method: "POST",
                credentials: "include",
            });
            setUser(null);
            navigate("/login");
        } catch (err) {
            console.error("Error logging out:", err);
        }
    };

    return (
        <nav className="nav flex justify-between">
            <div className="icons-container flex items-center">
                <button
                    className={`p-2 rounded-full option ${location.pathname === "/admin/home" ? "active" : ""}`}
                    onClick={() => navigate("/admin/home")}
                    title="Historial de partidos"
                >
                    <i className="fa-solid fa-house text-white"></i>
                </button>

                <button
                    className={`p-2 rounded-full option ${location.pathname === "/admin/matches" ? "active" : ""}`}
                    onClick={() => navigate("/admin/matches")}
                    title="Partidos"
                >
                    <i className="fas fa-futbol text-white"></i>
                </button>

                <button
                    className={`p-2 rounded-full option ${location.pathname === "/admin/trainings" ? "active" : ""}`}
                    onClick={() => navigate("/admin/trainings")}
                    title="Entrenos"
                >
                    <i className="fas fa-person-running text-white"></i>
                </button>

                <button
                    className={`p-2 rounded-full option ${location.pathname === "/admin/history" ? "active" : ""}`}
                    onClick={() => navigate("/admin/history")}
                    title="Historial de partidos"
                >
                    <i className="fas fa-clock-rotate-left text-white"></i>
                </button>

                <button
                    className={`p-2 rounded-full option ${location.pathname === "/admin/universities" ? "active" : ""}`}
                    onClick={() => navigate("/admin/universities")}
                    title="Universidades"
                >
                    <i className="fa-solid fa-building-columns text-white"></i>
                </button>

                <button
                    className="log-out bg-gray-100 px-3 py-1 rounded-lg"
                    onClick={handleLogout}
                >
                    Cerrar Sesión
                </button>
            </div>
        </nav>
    );
};

export default NavAdmin;
