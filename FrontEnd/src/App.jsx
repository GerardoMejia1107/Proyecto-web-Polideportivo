// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.css';
import './styles/index.css';
import AppRoutes from './routes/AppRoutes.jsx';


function App() {
    return (
        <Router>
            <div className="global-container">
                <AppRoutes/>
            </div>
        </Router>
    );
}

export default App;
