import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.css';
import './styles/index.css';
import { Toaster } from "react-hot-toast";
import AdminRoutes from "./routes/AdminRoutes.jsx";
import UserRoutes from "./routes/UserRoutes.jsx";
import LogInPage from "./pages/Admin/LogInPage/LogInPage.jsx";
import RegisterPage from "./pages/Admin/RegisterPage/RegisterPage.jsx";

function App() {
    return (
        <Router>
            <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />

            <div className="global-container">
                <Routes>
                    <Route path="/admin/*" element={<AdminRoutes />} />
                    <Route path="/user/*" element={<UserRoutes />} />
                    <Route path="/login" element={<LogInPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
