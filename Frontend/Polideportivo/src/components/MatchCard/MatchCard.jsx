import React from 'react';
import './MatchCard.css'

const MatchCard = ({ match }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 m-2">
            {/* Encabezado del deporte */}
            <div className="mb-2">
                <h3 className="text-lg font-bold text-center">{match.sport}</h3>
            </div>

            {/* Fecha y hora */}
            <div className="text-center mb-4">
                <p className="text-sm text-gray-500">{match.date} - {match.time}</p>
            </div>

            {/* Equipos y VS */}
            <div className="flex justify-center items-center gap-4 mt-2">
                <div className="flex flex-col items-center">
                    <img src={match.teamA.logo} alt={match.teamA.name} className="h-12 w-12"/>
                    <span className="text-sm">{match.teamA.name}</span>
                </div>

                <span className="font-semibold">VS</span>

                <div className="flex flex-col items-center">
                    <img src={match.teamB.logo} alt={match.teamB.name} className="h-12 w-12"/>
                    <span className="text-sm">{match.teamB.name}</span>
                </div>
            </div>
        </div>
    );
};

export default MatchCard;
