import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../../../context/userContext.jsx";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext);

    // Muestra un mensaje mientras se verifica el usuario
    if (user === undefined) {
        return <p>Cargando...</p>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
