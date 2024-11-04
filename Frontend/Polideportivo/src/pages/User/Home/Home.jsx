// src/views/Home.js
import React, { useState } from 'react';
import Header from '../../../components/Header/Header.jsx';
import FilterTab from '../../../components/FilterTab/FilterTab.jsx';
import MatchCard from '../../../components/MatchCard/MatchCard.jsx';
import Footer from '../../../components/Footer/Footer.jsx';

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
            <h2 style={{ textAlign: 'center', margin: '1em 0' }}>Partidos de esta semana</h2>
            <FilterTab selectedSport={selectedSport} onSelectSport={setSelectedSport} />
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {filteredMatches.map((match, index) => (
                    <MatchCard key={index} match={match} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
