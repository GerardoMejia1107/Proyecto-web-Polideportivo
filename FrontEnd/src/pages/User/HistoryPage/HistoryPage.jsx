import React, { useState } from "react";
import Header from "../../../components/Common/Header/Header.jsx";
import FilterTab from "../../../components/Common/FilterTab/FilterTab.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";
import NavVar from "../../../components/Common/NavVar/NavVar.jsx";
import "./HistoryPage.css";
import MatchResult from "../../../components/Common/MatchResult/MatchResult.jsx";

const HistoryPage = () => {
  const [selectedSport, setSelectedSport] = useState("Todos");
  const [selectedYear, setSelectedYear] = useState("2024");

  const matches = [
    {
      sport: "Voleibol",
      date: "20 de octubre de 2024",
      time: "14:00",
      teamA: { logo: "/vite.svg", name: "Equipo A", score: 1 },
      teamB: { logo: "/vite.svg", name: "Equipo B", score: 1 },
    },
    {
      sport: "Baloncesto",
      date: "20 de octubre de 2023",
      time: "16:00",
      teamA: { logo: "/vite.svg", name: "Equipo C", score: 130 },
      teamB: { logo: "/vite.svg", name: "Equipo D", score: 150 },
    },
    {
      sport: "Fútbol Sala",
      date: "21 de octubre de 2022",
      time: "10:00",
      teamA: { logo: "/vite.svg", name: "Equipo E", score: 5 },
      teamB: { logo: "/vite.svg", name: "Equipo F", score: 5 },
    },
    {
      sport: "Fútbol 11",
      date: "21 de octubre de 2021",
      time: "12:00",
      teamA: { logo: "/vite.svg", name: "Equipo G", score: 3 },
      teamB: { logo: "/vite.svg", name: "Equipo H", score: 2 },
    },
    {
      sport: "Voleibol",
      date: "20 de octubre de 2020",
      time: "14:00",
      teamA: { logo: "/vite.svg", name: "Equipo I", score: 1 },
      teamB: { logo: "/vite.svg", name: "Equipo J", score: 1 },
    },
    {
      sport: "Baloncesto",
      date: "20 de octubre de 2019",
      time: "16:00",
      teamA: { logo: "/vite.svg", name: "Equipo K", score: 130 },
      teamB: { logo: "/vite.svg", name: "Equipo L", score: 150 },
    },
  ];

  const filteredMatches = matches.filter((match) =>
    (selectedSport === "Todos" || match.sport === selectedSport) &&
    (match.date.includes(selectedYear))
  );

  return (
    <section className="history-container">
      <NavVar />
      <Header message="Mantente informado de partidos anteriores y de otras temporadas" />

      <main className="content-from-main">
        {/* Filtro de deportes */}
        <div className="filter-tab">
          <FilterTab
            selectedSport={selectedSport}
            onSelectSport={setSelectedSport}
          />
        </div>

        {/* Filtro de años */}
        <div className="year-filter-tab">
          {["2024", "2023", "2022", "2021", "2020", "2019"].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`year-filter-button ${selectedYear === year ? "active" : ""}`}
            >
              {year}
            </button>
          ))}
        </div>

        <section className="match-cards-container">
          {filteredMatches.map((match, index) => (
            <MatchResult key={index} match={match} className="match-card" />
          ))}
        </section>
      </main>

      <Footer />
    </section>
  );
};

export default HistoryPage;
