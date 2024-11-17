// src/routes/UserRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/User/HomePage/HomePage.jsx';
import HistoryPage from '../pages/User/HistoryPage/HistoryPage.jsx';
import TrainsPage from "../pages/User/TrainsPage/TrainsPage.jsx";

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path='history' element={<HistoryPage />} />
            <Route path="trainings" element={<TrainsPage />} />
        </Routes>
    );
};

export default UserRoutes;
