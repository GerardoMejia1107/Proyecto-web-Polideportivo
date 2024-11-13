// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.css';
import './styles/index.css';
import AppRoutes from '../src/routes/AppRoutes'
import MatchForm from '../src/components/Admin/Forms/Match/MatchForm';
import TrainingForm from '../src/components/Admin/Forms/Training/TrainingForm'


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
