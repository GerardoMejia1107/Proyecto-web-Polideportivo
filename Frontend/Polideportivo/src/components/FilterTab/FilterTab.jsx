import React from 'react';
import "./FilterTab.css";

const FilterTab = ({ selectedSport, onSelectSport }) => {
    const sports = ['Todos', 'Voleibol', 'Baloncesto', 'Futsal'];

    return (
        <div style={{ display: 'flex', gap: '1em', justifyContent: 'center', margin: '1em 0' }}>
            {sports.map((sport) => (
                <button
                    key={sport}
                    onClick={() => onSelectSport(sport)}
                    style={{
                        padding: '0.5em 1em',
                        backgroundColor: selectedSport === sport ? '#003366' : '#e0e0e0',
                        color: selectedSport === sport ? '#fff' : '#000',
                        border: 'none',
                        borderRadius: '5px'
                    }}
                >
                    {sport}
                </button>
            ))}
        </div>
    );
};

export default FilterTab;
