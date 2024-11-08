import React, { useState } from "react";
import Header from "../../../components/Common/Header/Header.jsx";
import FilterTab from "../../../components/Common/FilterTab/FilterTab.jsx";
import MatchCard from "../../../components/Common/MatchCard/MatchCard.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";
import "./Home.css";
import NavVar from "../../../components/Common/NavVar/NavVar.jsx";

const Home = () => {
  const [selectedSport, setSelectedSport] = useState("Todos");

  const matches = [
    {
      sport: "Voleibol",
      date: "20 de octubre de 2024",
      time: "14:00",
      teamA: {
        logo: "../../../../public/vite.svg",
        name: "Equipo A",
      },
      teamB: { logo: "../../../../public/vite.svg", name: "Equipo B" },
    },
    {
      sport: "Baloncesto",
      date: "20 de octubre de 2024",
      time: "16:00",
      teamA: { logo: "../../../../public/vite.svg", name: "Equipo C" },
      teamB: { logo: "../../../../public/vite.svg", name: "Equipo D" },
    },
    {
      sport: "Fútbol Sala",
      date: "21 de octubre de 2024",
      time: "10:00",
      teamA: { logo: "../../../../public/vite.svg", name: "Equipo C" },
      teamB: { logo: "../../../../public/vite.svg", name: "Equipo D" },
    },
    {
      sport: "Fútbol 11",
      date: "21 de octubre de 2024",
      time: "12:00",
      teamA: { logo: "../../../../public/vite.svg", name: "Equipo C" },
      teamB: { logo: "../../../../public/vite.svg", name: "Equipo D" },
    },
  ];

  const filteredMatches = matches.filter(
    (match) => selectedSport === "Todos" || match.sport === selectedSport
  );

  return (
    <div className={"home-container"}>
      <NavVar />
      <Header message={' Mantente informado sobre todos los eventos deportivos de la semana.'}/>

      <main className="content-from-main">
        {/*  <h2 className="title">Partidos de esta semana</h2>*/}
        <div className="filter-tab">
          <FilterTab
            selectedSport={selectedSport}
            onSelectSport={setSelectedSport}
          />
        </div>

        <section className={"match-cards-container"}>
          {filteredMatches.map((match, index) => (
            <MatchCard key={index} match={match} className="match-card" />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
