import React, { useState } from "react";
import Header from "../../../components/Common/Header/Header.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";
import NavVar from "../../../components/Common/NavVar/NavVar.jsx";
import "./Trainings.css";

const Trainings = () => {
  const [selectedSport, setSelectedSport] = useState("Todos");

  const trainings = [
    { day: "Lunes 15", time: "14:00 PM", place: "Polideportivo", status: "No decidido" },
    { day: "Lunes 15", time: "14:00 PM", place: "Polideportivo", status: "Cancelado" },
    { day: "Lunes 15", time: "14:00 PM", place: "Polideportivo", status: "Confirmado" },
  ];

  return (
    <section className="trainings-container">
      <NavVar />
      <Header message="Mantente informado de los entrenos de la semana de tu disciplina favorita" />

      <main className="trainings-content">
        <h2 className="current-week">Semana Actual: 07/10/2024</h2>

        {/* Selector de deportes */}
        <div className="sport-selector">
          <label htmlFor="sport-select" className="sport-select-label">
            Deporte:
          </label>
          <select
            id="sport-select"
            value={selectedSport}
            onChange={(e) => setSelectedSport(e.target.value)}
            className="sport-select"
          >
            <option value="Todos">Todos</option>
            <option value="Voleibol">Voleibol</option>
            <option value="Baloncesto">Baloncesto</option>
            <option value="Fútbol Sala">Fútbol Sala</option>
            <option value="Fútbol 11">Fútbol 11</option>
          </select>
        </div>

        {/* Tarjetas de entrenamientos */}
        <section className="training-cards-container">
          {trainings.map((training, index) => (
            <div key={index} className="training-card">
              <div className="training-day">{training.day}</div>
              <div className="training-time">Hora: {training.time}</div>
              <div className="training-place">Lugar: {training.place}</div>
              <div className={`training-status ${training.status.replace(" ", "-").toLowerCase()}`}>
                {training.status === "No decidido" && (
                  <>
                    <span role="img" aria-label="no-decidido" className="status-icon">😐</span> No decidido
                  </>
                )}
                {training.status === "Cancelado" && (
                  <>
                    <span role="img" aria-label="cancelado" className="status-icon">😔</span> Cancelado
                  </>
                )}
                {training.status === "Confirmado" && (
                  <>
                    <span role="img" aria-label="confirmado" className="status-icon">😊</span> Confirmado
                  </>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </section>
  );
};

export default Trainings;
