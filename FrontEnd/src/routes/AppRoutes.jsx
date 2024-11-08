// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminRoutes from './AdminRoutes.jsx';
import UserRoutes from './UserRoutes.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Rutas del administrador */}
            <Route path="/admin/*" element={<AdminRoutes />} />

            {/* Rutas del usuario */}
            <Route path="/user/*" element={<UserRoutes />} />
        </Routes>
    );
};

export default AppRoutes;
