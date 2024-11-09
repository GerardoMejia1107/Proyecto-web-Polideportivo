import React from "react";
import NavAdmin from "../../../components/Admin/NavAdmin/NavAdmin.jsx";
import "./HomeDashboard.css";
import Header from "../../../components/Common/Header/Header.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";
import MatchEvent from "../../../components/Admin/MatchEvent/MatchEvent.jsx";
import TrainEvent from "../../../components/Admin/TrainEvent/TrainEvent.jsx";

const HomeDashboard = () => {
  const partidos = [
    { id: 1,
      equipo1Logo: "http://localhost:5173/src/assets/images/UCA.png",
      equipo2Logo: "http://localhost:5173/src/assets/images/UCA.png",
      horario: "14:00",
      lugar: 'Magico Gonazales',
      deporte: "Fútbol",
    },
    { id: 1,
      equipo1Logo: "http://localhost:5173/src/assets/images/UCA.png",
      equipo2Logo: "http://localhost:5173/src/assets/images/UCA.png",
      horario: "14:00",
      lugar: 'Magico Gonazales',
      deporte: "Fútbol",
    },
    { id: 1,
      equipo1Logo: "http://localhost:5173/src/assets/images/UCA.png",
      equipo2Logo: "http://localhost:5173/src/assets/images/UCA.png",
      horario: "14:00",
      lugar: 'Magico Gonazales',
      deporte: "Fútbol",
    },
    { id: 1,
      equipo1Logo: "http://localhost:5173/src/assets/images/UCA.png",
      equipo2Logo: "http://localhost:5173/src/assets/images/UCA.png",
      horario: "14:00",
      lugar: 'Magico Gonazales',
      deporte: "Fútbol",
    },
    { id: 1,
      equipo1Logo: "http://localhost:5173/src/assets/images/UCA.png",
      equipo2Logo: "http://localhost:5173/src/assets/images/UCA.png",
      horario: "14:00",
      lugar: 'Magico Gonazales',
      deporte: "Fútbol",
    },

  ];

  const entrenamientos = [
    { id: 1, lugar: 'Polideportivo UCA', horario: "09:00", deporte: "Voleibol" },
    { id: 2, lugar: 'Polideportivo UCA', horario: "11:00", deporte: "Futsal" },
    { id: 1, lugar: 'Polideportivo UCA', horario: "09:00", deporte: "Voleibol" },
    { id: 2, lugar: 'Polideportivo UCA', horario: "11:00", deporte: "Futsal" },
    { id: 1, lugar: 'Polideportivo UCA', horario: "09:00", deporte: "Voleibol" },
    { id: 2, lugar: 'Polideportivo UCA', horario: "11:00", deporte: "Futsal" },
    { id: 1, lugar: 'Polideportivo UCA', horario: "09:00", deporte: "Voleibol" },
    { id: 2, lugar: 'Polideportivo UCA', horario: "11:00", deporte: "Futsal" },
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
                <MatchEvent match={partido} key={partido.id} />
              ))}
            </div>
          </div>

          {/* Sección de Entrenamientos en curso */}
          <div className="admin-home-trainings-section">
            <h2>Entrenamientos transcurriendo</h2>

            <div className="admin-home-trainings-list">
              {entrenamientos.map((entrenamiento) => (
               <TrainEvent train={entrenamiento} key={entrenamiento.id} />
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
