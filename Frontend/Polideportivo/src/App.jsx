import { useState } from 'react'
import './styles/App.css'
import './styles/index.css'
import Home from "./pages/Usuario/Home.jsx";
import HomeDashboard from "./pages/Admin/HomeDashboard/HomeDashboard.jsx";

function App() {
  return (
    <div className='global-container'>
    <HomeDashboard/>
    </div>
  )
}

export default App
