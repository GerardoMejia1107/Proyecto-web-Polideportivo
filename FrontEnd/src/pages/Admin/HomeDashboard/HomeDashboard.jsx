import React from 'react';
import NavAdmin from "../../../components/Admin/NavAdmin/NavAdmin.jsx";
import './HomeDashboard.css';
import Header from "../../../components/Common/Header/Header.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";

const HomeDashboard = () => {
    const partidos = [
        { id: 1, equipo1Logo: 'http://localhost:5173/src/assets/images/UCA.png', equipo2Logo: 'http://localhost:5173/src/assets/images/UCA.png', horario: '14:00', deporte: 'Fútbol' },
        { id: 1, equipo1Logo: 'http://localhost:5173/src/assets/images/UCA.png', equipo2Logo: 'http://localhost:5173/src/assets/images/UCA.png', horario: '14:00', deporte: 'Fútbol' },
        { id: 1, equipo1Logo: 'http://localhost:5173/src/assets/images/UCA.png', equipo2Logo: 'http://localhost:5173/src/assets/images/UCA.png', horario: '14:00', deporte: 'Fútbol' },
        { id: 1, equipo1Logo: 'http://localhost:5173/src/assets/images/UCA.png', equipo2Logo: 'http://localhost:5173/src/assets/images/UCA.png', horario: '14:00', deporte: 'Fútbol' },
        { id: 1, equipo1Logo: 'http://localhost:5173/src/assets/images/UCA.png', equipo2Logo: 'http://localhost:5173/src/assets/images/UCA.png', horario: '14:00', deporte: 'Fútbol' },
    ];

    const entrenamientos = [
        { id: 1, equipo: 'Equipo E', horario: '09:00', deporte: 'Voleibol' },
        { id: 2, equipo: 'Equipo F', horario: '11:00', deporte: 'Futsal' }
    ];

    return (
        <section className="events-container">
            <NavAdmin/>
            <Header message={'Visualiza tus eventos deportivos transcurriendo'}/>
            <main className="content-from-main">
                <div className="main-content">
                    {/* Sección de Partidos en curso */}
                    <div className="data-from-db matches">
                        <h2>Partidos transcurriendo</h2>
                        <hr/>
                        <div className="data-content">
                            {partidos.map(partido => (
                                <div key={partido.id} className="item">
                                    <i className="fas fa-circle status-icon"></i>
                                    <div className="item-details">
                                        <div className="team-logos">
                                            <img src={partido.equipo1Logo} alt="Logo equipo 1" className="team-logo" />
                                            <h1 className="versus">vs</h1>
                                            <img src={partido.equipo2Logo} alt="Logo equipo 2" className="team-logo" />
                                        </div>
                                        <p className={'match-sport'}>{partido.deporte} - {partido.horario} hrs</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sección de Entrenamientos en curso */}
                    <div className="data-from-db trainings">
                        <h2>Entrenamientos transcurriendo</h2>
                        <hr/>
                        <div className="data-content">
                            {entrenamientos.map(entrenamiento => (
                                <div key={entrenamiento.id} className="item">
                                    <i className="fas fa-circle status-icon"></i>
                                    <div className="item-details">
                                        <h3>{entrenamiento.equipo}</h3>
                                        <p>{entrenamiento.deporte} - {entrenamiento.horario} hrs</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </section>
    );
}

export default HomeDashboard;