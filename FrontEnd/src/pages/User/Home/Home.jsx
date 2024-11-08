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
        logo: "../../../assets/images/Alberto Maferrer.png",
        name: "Equipo A",
      },
      teamB: { logo: "../../../assets/images/UCA.png", name: "Equipo B" },
    },
    {
      sport: "Baloncesto",
      date: "20 de octubre de 2024",
      time: "16:00",
      teamA: { logo: "/path/to/logo3.png", name: "Equipo C" },
      teamB: { logo: "/path/to/logo4.png", name: "Equipo D" },
    },
    {
      sport: "Fútbol Sala",
      date: "21 de octubre de 2024",
      time: "10:00",
      teamA: { logo: "/path/to/logo5.png", name: "Equipo E" },
      teamB: { logo: "/path/to/logo6.png", name: "Equipo F" },
    },
    {
      sport: "Fútbol 11",
      date: "21 de octubre de 2024",
      time: "12:00",
      teamA: { logo: "/path/to/logo7.png", name: "Equipo G" },
      teamB: { logo: "/path/to/logo8.png", name: "Equipo H" },
    },
    {
      sport: "Voleibol",
      date: "22 de octubre de 2024",
      time: "09:00",
      teamA: { logo: "/path/to/logo9.png", name: "Equipo I" },
      teamB: { logo: "/path/to/logo10.png", name: "Equipo J" },
    },
    {
      sport: "Voleibol",
      date: "22 de octubre de 2024",
      time: "13:00",
      teamA: { logo: "/path/to/logo11.png", name: "Equipo K" },
      teamB: { logo: "/path/to/logo12.png", name: "Equipo L" },
    },
    {
      sport: "Fútbol Sala",
      date: "23 de octubre de 2024",
      time: "15:00",
      teamA: { logo: "/path/to/logo13.png", name: "Equipo M" },
      teamB: { logo: "/path/to/logo14.png", name: "Equipo N" },
    },
    {
      sport: "Fútbol 11",
      date: "23 de octubre de 2024",
      time: "17:30",
      teamA: { logo: "/path/to/logo15.png", name: "Equipo O" },
      teamB: { logo: "/path/to/logo16.png", name: "Equipo P" },
    },
  ];

  const filteredMatches = matches.filter(
    (match) => selectedSport === "Todos" || match.sport === selectedSport
  );

  return (
    <div className={"home-container"}>
      <NavVar />
      <Header />

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
