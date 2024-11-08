import React from 'react';
import "./FilterTab.css";

const FilterTab = ({ selectedSport, onSelectSport }) => {
    const sports = ['Todos', 'Voleibol', 'Baloncesto', 'Fútbol Sala', 'Fútbol 11'];

    return (
        <div className="filter-tab">
            {sports.map((sport) => (
                <button
                    key={sport}
                    onClick={() => onSelectSport(sport)}
                    className={`filter-button ${selectedSport === sport ? 'active' : ''}`}
                >
                    {selectedSport === sport && <span className="checkmark">✓</span>} {/* Agrega el icono en el botón activo */}
                    {sport}
                </button>
            ))}
        </div>
    );
};

export default FilterTab;
