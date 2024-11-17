import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeDashPage from '../pages/Admin/HomeDashPage/HomeDashPage.jsx';
import MatchesPage from "../pages/Admin/MatchesPage/MatchesPage.jsx";
import HistoryPage from "../pages/Admin/HistoryPage/HistoryPage.jsx";
import TrainsPage from "../pages/Admin/TrainsPage/TrainsPage.jsx";
import UnivSportPage from "../pages/Admin/Univ&SportPage/Univ&SportPage.jsx";


const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="home" element={<HomeDashPage />} />
            <Route path="matches" element={<MatchesPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="trainings" element={<TrainsPage />} />
            <Route path="universities" element={<UnivSportPage />} />
        </Routes>
    );
}

export default AdminRoutes;