// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.css';
import './styles/index.css';
import AppRoutes from '../src/routes/AppRoutes'
import axios from 'axios';
import {Toaster} from "react-hot-toast";



function App() {
    return (

       <>
           <Toaster position={'bottom-right'} toastOptions={{duration: 2000}}></Toaster>
           <Router>
               <div className="global-container">
                   <AppRoutes/>

               </div>
           </Router>
       </>
    );
}

export default App;
