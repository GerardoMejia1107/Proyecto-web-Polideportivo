import React, { useState } from "react";
import Header from "../../../components/Common/Header/Header.jsx";
import FilterTab from "../../../components/Common/FilterTab/FilterTab.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";
import NavVar from "../../../components/Common/NavVar/NavVar.jsx";
import "./History.css";
import MatchResult from "../../../components/Common/MatchResult/MatchResult.jsx";

const History = () => {
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
      date: "20 de octubre de 2024",
      time: "16:00",
      teamA: { logo: "/vite.svg", name: "Equipo C", score: 130 },
      teamB: { logo: "/vite.svg", name: "Equipo D", score: 150 },
    },
    {
      sport: "Fútbol Sala",
      date: "21 de octubre de 2024",
      time: "10:00",
      teamA: { logo: "/vite.svg", name: "Equipo E", score: 5 },
      teamB: { logo: "/vite.svg", name: "Equipo F", score: 5 },
    },
    {
      sport: "Fútbol 11",
      date: "21 de octubre de 2024",
      time: "12:00",
      teamA: { logo: "/vite.svg", name: "Equipo G", score: 3 },
      teamB: { logo: "/vite.svg", name: "Equipo H", score: 2 },
    },
  ];

  const filteredMatches = matches.filter(
    (match) => selectedYear === "2024" || match.date.includes(selectedYear)
  );

  return (
    <section className="history-container">
      <NavVar />
      <Header message="Mantente informado de partidos anteriores y de otras temporadas" />

      <main className="content-from-main">
        <div className="filter-tab">
          <FilterTab
            selectedSport={selectedYear}
            onSelectSport={setSelectedYear}
          />
        </div>

        <section className="match-cards-container">
          {filteredMatches.map((match, index) => (
            /*  <MatchCard key={index} match={match} className="match-card" /> */
            <MatchResult key={index} match={match} className="match-card" />
          ))}
        </section>
      </main>

      <Footer />
    </section>
  );
};

export default History;
