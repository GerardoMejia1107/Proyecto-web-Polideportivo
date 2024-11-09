import React from "react";
import NavAdmin from "../../../components/Admin/NavAdmin/NavAdmin.jsx";
import "./HomeDashboard.css";
import Header from "../../../components/Common/Header/Header.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";

const HomeDashboard = () => {
  const partidos = [
    {
      id: 1,
      equipo1Logo: "http://localhost:5173/src/assets/images/UCA.png",
      equipo2Logo: "http://localhost:5173/src/assets/images/UCA.png",
      horario: "14:00",
      deporte: "Fútbol",
    },
    {
      id: 2,
      equipo1Logo: "http://localhost:5173/src/assets/images/UCA.png",
      equipo2Logo: "http://localhost:5173/src/assets/images/UCA.png",
      horario: "14:00",
      deporte: "Fútbol",
    },
    {
      id: 3,
      equipo1Logo: "http://localhost:5173/src/assets/images/UCA.png",
      equipo2Logo: "http://localhost:5173/src/assets/images/UCA.png",
      horario: "14:00",
      deporte: "Fútbol",
    },
    {
      id: 4,
      equipo1Logo: "http://localhost:5173/src/assets/images/UCA.png",
      equipo2Logo: "http://localhost:5173/src/assets/images/UCA.png",
      horario: "14:00",
      deporte: "Fútbol",
    },
    {
      id: 5,
      equipo1Logo: "http://localhost:5173/src/assets/images/UCA.png",
      equipo2Logo: "http://localhost:5173/src/assets/images/UCA.png",
      horario: "14:00",
      deporte: "Fútbol",
    },
  ];

  const entrenamientos = [
    { id: 1, equipo: "Equipo E", horario: "09:00", deporte: "Voleibol" },
    { id: 2, equipo: "Equipo F", horario: "11:00", deporte: "Futsal" },
    { id: 1, equipo: "Equipo E", horario: "09:00", deporte: "Voleibol" },
    { id: 2, equipo: "Equipo F", horario: "11:00", deporte: "Futsal" },
    { id: 1, equipo: "Equipo E", horario: "09:00", deporte: "Voleibol" },
    { id: 2, equipo: "Equipo F", horario: "11:00", deporte: "Futsal" },
    { id: 1, equipo: "Equipo E", horario: "09:00", deporte: "Voleibol" },
    { id: 2, equipo: "Equipo F", horario: "11:00", deporte: "Futsal" },
  ];

  return (
    <section className="admin-home-container">
      <NavAdmin />
      <Header message={"Visualiza tus eventos deportivos transcurriendo"} />
      <main className="admin-home-main-content">
        <div className="admin-home-main-section">
          {/* Sección de Partidos en curso */}
          <div className="admin-home-matches-section">
            <h2>Partidos transcurriendo</h2>

            <div className="admin-home-matches-list">
              {partidos.map((partido) => (
                <div key={partido.id} className="admin-home-match-item">
                  <i className="fas fa-circle admin-home-match-status-icon"></i>
                  <div className="admin-home-match-details">
                    <div className="admin-home-team-logos">
                      <img
                        src={partido.equipo1Logo}
                        alt="Logo equipo 1"
                        className="admin-home-team-logo"
                      />
                      <h1 className="admin-home-match-versus">vs</h1>
                      <img
                        src={partido.equipo2Logo}
                        alt="Logo equipo 2"
                        className="admin-home-team-logo"
                      />
                    </div>
                    <p className="admin-home-match-info">
                      {partido.deporte} - {partido.horario} hrs
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sección de Entrenamientos en curso */}
          <div className="admin-home-trainings-section">
            <h2>Entrenamientos transcurriendo</h2>

            <div className="admin-home-trainings-list">
              {entrenamientos.map((entrenamiento) => (
                <div
                  key={entrenamiento.id}
                  className="admin-home-training-item"
                >
                  <i className="fas fa-circle admin-home-training-status-icon"></i>
                  <div className="admin-home-training-details">
                    <h3 className="admin-home-training-team">
                      {entrenamiento.equipo}
                    </h3>
                    <p className="admin-home-training-info">
                      {entrenamiento.deporte} - {entrenamiento.horario} hrs
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default HomeDashboard;
