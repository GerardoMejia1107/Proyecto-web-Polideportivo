// src/routes/UserRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Usuario/Home.jsx';

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="home" element={<Home />} />
        </Routes>
    );
};

export default UserRoutes;
