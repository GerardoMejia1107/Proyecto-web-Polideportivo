import React, { useState } from "react";
import Header from "../../../components/Common/Header/Header.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";
import NavVar from "../../../components/Common/NavVar/NavVar.jsx";
import "./Trainings.css";
import TrainingCard from "../../../components/Common/TrainingCard/TrainingCard.jsx";

const Trainings = () => {
  const [selectedSport, setSelectedSport] = useState("Todos");
  const date = new Date()

  const training = [
    { day: "Lunes 15", time: "14:00 PM", place: "Polideportivo", status: "No decidido" },
    { day: "Lunes 15", time: "14:00 PM", place: "Polideportivo", status: "Cancelado" },
    { day: "Lunes 15", time: "14:00 PM", place: "Polideportivo", status: "Confirmado" },
  ];

  return (
    <section className="user-trainings-container">
      <NavVar />
      <Header message="Mantente informado de los entrenos de la semana de tu disciplina favorita" />

      <main className="user-trainings-content">
        <h2 className="current-week">Semana Actual: {date.toLocaleDateString()}</h2>

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
          {training.map((training, index) => (
              <TrainingCard training={training} key={index} />
          ))}
        </section>


      </main>

      <Footer />
    </section>
  );
};

export default Trainings;
