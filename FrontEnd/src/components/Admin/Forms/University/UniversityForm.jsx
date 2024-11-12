import './UniversityForm.css';
import usePost from "../../../../hooks/usePost.js";
import React, { useState } from "react";

const UniversityForm = ({ onClose }) => {
    const { postData, data, error, loading } = usePost('http://localhost:3000/api/universities/create');
    const [universityName, setUniversityName] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({ name: universityName, location });
    };

    return (
        <div className="university-form-container">
            <h2 className="university-form-title">Datos</h2>
            <form className="university-form" onSubmit={handleSubmit}>
                <div className="university-form-group">
                    <label htmlFor="universityName">Nombre de la universidad</label>
                    <input
                        type="text"
                        id="universityName"
                        placeholder="Ej. Universidad Centroamericana"
                        value={universityName}
                        onChange={(e) => setUniversityName(e.target.value)}
                    />
                </div>
                <div className="university-form-group">
                    <label htmlFor="location">Ubicación</label>
                    <input
                        type="text"
                        id="location"
                        placeholder="Ej. San Salvador, El Salvador"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                {loading && <p>Guardando...</p>}
                {error && <p>Error: {error}</p>}
                {data && <p>Guardado exitosamente!</p>}
                <div className="university-form-actions">
                    <button type="submit" className="save-button" disabled={loading}>Guardar</button>
                    <button type="button" onClick={onClose} className="cancel-button">Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default UniversityForm;
