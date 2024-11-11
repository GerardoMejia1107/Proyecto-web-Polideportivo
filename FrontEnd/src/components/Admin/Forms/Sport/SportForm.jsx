import React from 'react';
import './SportForm.css'
const SportForm = ({ onClose }) => {
    
    return (
        <div className="sport-form-container">
                <h2 className="sport-form-title">Agregar deporte</h2>
                <form className="sport-form">
                    <div className="sport-form-group">
                        <label htmlFor="sportName" className='label-name'>Nombre del deporte:</label>
                        <input
                            type="text"
                            id="sportName"
                            placeholder="Ej. Baloncesto"
                        />
                    </div>
                    <div className="sport-form-actions">
                        <button type="submit" className="save-button">Guardar</button>
                        <button onClick={onClose} className="cancel-button">Cancelar</button>
                    </div>
                </form>
            </div>
    );
};

export default SportForm;
