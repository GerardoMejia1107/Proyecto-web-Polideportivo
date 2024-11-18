import React from "react";
import './TrainingForm.css'

const TrainingForm = ({show, onClose}) => {
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
                            <label htmlFor="sport">Deporte</label>
                            <select id="sport" name="sport" required>
                                <option value="" disabled selected>Seleccionar Deporte</option>
                                <option value="futbol">Fútbol</option>
                                <option value="baloncesto">Baloncesto</option>
                                <option value="tenis">Tenis</option>
                                <option value="natacion">Natación</option>
                                <option value="voleibol">Voleibol</option>
                            </select>
                        </div>


                        <div className="form-group">
                            <label htmlFor="status">Estado</label>
                            <select id="status" name="status" required>
                                <option value="" disabled selected>Seleccionar Estado</option>
                                <option value="confirmado">Confirmado</option>
                                <option value="pendiente">Pendiente</option>
                                <option value="cancelado">Cancelado</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="location">Lugar</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Ej. San Salvador, El Salvador"
                                required
                            />
                        </div>


                        {/* Fecha y Hora */}
                        <div className="form-group-inline">
                            <div className="form-group">
                                <label htmlFor="date">Fecha</label>
                                <input type="date" id="date" name="date" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="time">Hora</label>
                                <input type="time" id="time" name="time" required/>
                            </div>
                        </div>


                        <div className="training-form-actions">
                            <button type="submit" className="save-button">Guardar</button>
                            <button
                                type="button"
                                className="cancel-button"
                                onClick={onClose}
                                aria-label="Cancelar y cerrar formulario"
                            >
                                Cancelar
                            </button>
                        </div>


                    </form>
                </div>
            </div>

        </div>

    );
};

export default TrainingForm;
