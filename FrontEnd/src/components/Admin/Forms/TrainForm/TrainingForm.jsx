import React from "react";
import './TrainingForm.css' 

const TrainingForm = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div className="modal-style">
            <div className="modal-content-style">
                <button className="modal-close-btn" onClick={onClose}>
                &times;
                </button>
                <div className="training-form-container">
                    <h2 className="training-form-title">Información sobre el entrenamiento</h2>
                    <form className="training-form">
                
                        {/* Campo de selección de Deporte */}
                        <div className="form-group">
                            <label>Deporte</label>
                            <select>
                                <option>Seleccionar Deporte</option>
                                <option>Fútbol</option>
                                <option>Baloncesto</option>
                                <option>Tenis</option>
                                <option>Natacion</option>
                                <option>Voleibol</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="location">Lugar</label>
                            <input
                                type="text"
                                id="location"
                                placeholder="Ej. San Salvador, El Salvador"
                                />
                        </div>

                        {/* Fecha y Hora */}
                        <div className="form-group-inline">
                            <div className="form-group">
                                <label>Fecha</label>
                                <input type="date"/>
                            </div>
                            <div className="form-group">
                                <label>Hora</label>
                                <input type="time"/>
                            </div>
                        </div>

                        <div className="training-form-actions">
                            <button type="submit" className="save-button">Guardar</button>
                            <button className="cancel-button" onClick={onClose}>Cancelar</button>
                        </div> 

                    </form>
                </div>
            </div>   
        
        </div> 

    );
};

export default TrainingForm;
