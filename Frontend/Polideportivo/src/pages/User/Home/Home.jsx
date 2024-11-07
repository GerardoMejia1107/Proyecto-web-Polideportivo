import React, { useState } from 'react';
import Header from '../../../components/Header/Header.jsx';
import FilterTab from '../../../components/FilterTab/FilterTab.jsx';
import MatchCard from '../../../components/MatchCard/MatchCard.jsx';
import Footer from '../../../components/Footer/Footer.jsx';
import './Home.css'
const Home = () => {
    const [selectedSport, setSelectedSport] = useState('Todos');

    const matches = [
        { sport: 'Voleibol', date: '20 de octubre de 2024', time: '14:00', teamA: { logo: '/path/to/logo1.png', name: 'Equipo A' }, teamB: { logo: '/path/to/logo2.png', name: 'Equipo B' } },
        { sport: 'Baloncesto', date: '20 de octubre de 2024', time: '14:00', teamA: { logo: '/path/to/logo1.png', name: 'Equipo C' }, teamB: { logo: '/path/to/logo2.png', name: 'Equipo D' } },
        // Agrega más partidos aquí
    ];

    const filteredMatches = matches.filter(match => selectedSport === 'Todos' || match.sport === selectedSport);

    return (
        <div>
            <Header />
            <div className="container">
                <h2 className="title">Partidos de esta semana</h2>
                <div className="filter-tab">
                    <FilterTab selectedSport={selectedSport} onSelectSport={setSelectedSport} />
                </div>
                <div>
                    {filteredMatches.map((match, index) => (
                        <MatchCard key={index} match={match} className="match-card" />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
