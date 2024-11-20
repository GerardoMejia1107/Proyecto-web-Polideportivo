// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminRoutes from "./AdminRoutes.jsx";
import UserRoutes from "./UserRoutes.jsx";
import LogInPage from "../pages/Admin/LogInPage/LogInPage.jsx";


const AppRoutes = () => {
    return (
        <Routes>
            {/* Admin Routes */}
            <Route path="/admin/*" element={<AdminRoutes />} />

            {/* User Routes */}
            <Route path="/user/*" element={<UserRoutes />} />

            {/* Login Page */}
            <Route path="/login" element={<LogInPage />} />
+
        </Routes>
    );
};

export default AppRoutes;
