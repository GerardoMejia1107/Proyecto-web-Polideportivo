import React, { useState } from "react";
import Header from "../../../components/Common/Header/Header.jsx";
import FilterTab from "../../../components/Common/FilterTab/FilterTab.jsx";
import MatchCard from "../../../components/Common/MatchCard/MatchCard.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";
import NavVar from "../../../components/Common/NavVar/NavVar.jsx";
import "./History.css";

const History = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const matches = [
    {
      sport: "Voleibol",
      date: "20 de octubre de 2024",
      time: "14:00",
      teamA: { logo: "/vite.svg", name: "Equipo A" },
      teamB: { logo: "/vite.svg", name: "Equipo B" },
    },
    {
      sport: "Baloncesto",
      date: "20 de octubre de 2024",
      time: "16:00",
      teamA: { logo: "/vite.svg", name: "Equipo C" },
      teamB: { logo: "/vite.svg", name: "Equipo D" },
    },
    {
      sport: "Fútbol Sala",
      date: "21 de octubre de 2024",
      time: "10:00",
      teamA: { logo: "/vite.svg", name: "Equipo E" },
      teamB: { logo: "/vite.svg", name: "Equipo F" },
    },
    {
      sport: "Fútbol 11",
      date: "21 de octubre de 2024",
      time: "12:00",
      teamA: { logo: "/vite.svg", name: "Equipo G" },
      teamB: { logo: "/vite.svg", name: "Equipo H" },
    },
  ];

  const filteredMatches = matches.filter(
    (match) => selectedYear === "2024" || match.date.includes(selectedYear)
  );

  return (
    <div className="history-container">
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
            <MatchCard key={index} match={match} className="match-card" />
            ))}
        </section>
        </main>

    <Footer />
    </div>
    );
};

export default History;
