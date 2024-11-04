import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeDashboard from '../pages/Admin/HomeDashboard/HomeDashboard.jsx';


const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="home" element={<HomeDashboard />} />
        </Routes>
    );
}

export default AdminRoutes;