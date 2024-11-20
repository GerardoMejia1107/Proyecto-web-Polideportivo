import React, {useContext} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {UserContext, UserContextProvider} from "../../context/userContext.jsx";
import HomeDashPage from "../pages/Admin/HomeDashPage/HomeDashPage.jsx";
import MatchesPage from "../pages/Admin/MatchesPage/MatchesPage.jsx";
import HistoryPage from "../pages/Admin/HistoryPage/HistoryPage.jsx";
import TrainsPage from "../pages/Admin/TrainsPage/TrainsPage.jsx";
import UnivSportPage from "../pages/Admin/Univ&SportPage/Univ&SportPage.jsx";

const AdminRoutes = () => {

    return (
        <UserContextProvider>
            <Routes>
                <Route path="home" element={<HomeDashPage/>}/>
                <Route path="matches" element={<MatchesPage/>}/>
                <Route path="history" element={<HistoryPage/>}/>
                <Route path="trainings" element={<TrainsPage/>}/>
                <Route path="universities" element={<UnivSportPage/>}/>
            </Routes>
        </UserContextProvider>

    );
};

export default AdminRoutes;
