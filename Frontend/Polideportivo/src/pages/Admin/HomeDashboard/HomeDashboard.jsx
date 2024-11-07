import React from 'react';
import NavAdmin from "../../../components/Admin/NavAdmin/NavAdmin.jsx";
import HeaderAdmin from "../../../components/Admin/HeaderAdmin/HeaderAdmin.jsx";
import './HomeDashboard.css';

const HomeDashboard = () => {
    const partidos = [
        { id: 1, equipos: 'Equipo A vs Equipo B', horario: '14:00', deporte: 'Fútbol' },
        { id: 2, equipos: 'Equipo C vs Equipo D', horario: '16:00', deporte: 'Baloncesto' }
    ];

    const entrenamientos = [
        { id: 1, equipo: 'Equipo E', horario: '09:00', deporte: 'Voleibol' },
        { id: 2, equipo: 'Equipo F', horario: '11:00', deporte: 'Futsal' }
    ];

    return (
        <section className="content">
            <HeaderAdmin />
            <main className="container">
                <div className="main-content">
                    {/* Sección de Partidos en curso */}
                    <div className="data-from-db matches">
                        <h2>Partidos transcurriendo</h2>
                        <div className="data-content">
                            {partidos.map(partido => (
                                <div key={partido.id} className="item">
                                    <i className="fas fa-circle status-icon"></i>
                                    <div className="item-details">
                                        <h3>{partido.equipos}</h3>
                                        <p>{partido.deporte} - {partido.horario} hrs</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sección de Entrenamientos en curso */}
                    <div className="data-from-db trainings">
                        <h2>Entrenamientos transcurriendo</h2>
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
        </section>
    );
}

export default HomeDashboard;
