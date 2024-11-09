// src/routes/UserRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/User/Home/Home.jsx';
import History from '../pages/User/History/History.jsx';
import Trainings from "../pages/User/Trainings/Trainings.jsx";

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="home" element={<Home />} />
            <Route path='history' element={<History />} />
            <Route path="trainings" element={<Trainings />} />
        </Routes>
    );
};

export default UserRoutes;
