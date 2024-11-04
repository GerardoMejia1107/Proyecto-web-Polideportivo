import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeDashboard from '../pages/Admin/HomeDashboard/HomeDashboard.jsx';
import Matches from "../pages/Admin/Matches/Matches.jsx";
import History from "../pages/Admin/History/History.jsx";
import Trainings from "../pages/Admin/Trainings/Trainings.jsx";
import Universities from "../pages/Admin/Universities/Universities.jsx";


const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="home" element={<HomeDashboard />} />
            <Route path="matches" element={<Matches />} />
            <Route path="history" element={<History />} />
            <Route path="trainings" element={<Trainings />} />
            <Route path="universities" element={<Universities />} />
        </Routes>
    );
}

export default AdminRoutes;