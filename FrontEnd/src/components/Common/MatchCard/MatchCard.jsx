import React from 'react';
import './MatchCard.css';

const MatchCard = ({ match }) => {
    return (
        <div className="match-card">
            {/* Encabezado del deporte */}
            <div className="match-sport">
                <h3>{match.sport}</h3>
            </div>

            {/* Fecha y hora */}
            <div className="match-date">
                <p>{match.date} - {match.time}</p>
            </div>

            {/* Equipos y VS */}
            <div className="teams-container">
                <div className="team">
                    <img src={match.teamA.logo} alt={match.teamA.name} className="team-logo" />
                    <span className="team-name">{match.teamA.name}</span>
                </div>

                <span className="vs-text">VS</span>

                <div className="team">
                    <img src={match.teamB.logo} alt={match.teamB.name} className="team-logo" />
                    <span className="team-name">{match.teamB.name}</span>
                </div>
            </div>

            {/* Botón de información */}
            <button className="info-button">Información</button>
        </div>
    );
};

export default MatchCard;
