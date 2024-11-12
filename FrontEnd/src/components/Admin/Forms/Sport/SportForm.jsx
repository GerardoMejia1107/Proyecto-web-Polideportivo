import React, { useState } from 'react';
import './SportForm.css';
import usePost from '../../../../hooks/usePost.js'; // Importa el hook usePost

const SportForm = ({ onClose }) => {
    const { postData, data, error, loading } = usePost('http://localhost:3000/api/sports/create'); // Cambia la URL a tu endpoint
    const [sportName, setSportName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({ name: sportName }); // Envía el nombre del deporte al endpoint
    };

    return (
        <div className="sport-form-container">
            <h2 className="sport-form-title">Datos</h2>
            <form className="sport-form" onSubmit={handleSubmit}>
                <div className="sport-form-group">
                    <label htmlFor="sportName" className="label-name">Nombre del deporte:</label>
                    <input
                        type="text"
                        id="sportName"
                        placeholder="Ej. Baloncesto"
                        value={sportName}
                        onChange={(e) => setSportName(e.target.value)}
                    />
                </div>
                {loading && <p>Guardando...</p>}
                {error && <p>Error: {error}</p>}
                {data && <p>Guardado exitosamente!</p>}
                <div className="sport-form-actions">
                    <button type="submit" className="save-button" disabled={loading}>Guardar</button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="cancel-button"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SportForm;
