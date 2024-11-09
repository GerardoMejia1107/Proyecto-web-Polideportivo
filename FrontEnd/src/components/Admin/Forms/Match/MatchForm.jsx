import React from "react";
import './MatchForm.css'

const MatchForm = () => {
    return (
        <div className="match-form-container">
            <h2 className="match-form-title">Información Sobre Partido</h2>

            {/* Campo de selección de Deporte */}
            <div className="form-group">
                <label>Deporte</label>
                <select>
                    <option>Seleccionar Deporte</option>
                    <option>Fútbol</option>
                    <option>Baloncesto</option>
                    <option>Voleibol</option>
                </select>
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

            {/* Poster promocional */}
            <div className="form-group image-upload">
                <label>Agrega un poster promocional del evento</label>
                <div className="upload-box">
                    <i className="fa fa-image"></i>
                    <p>Buscar</p>
                </div>
            </div>

            {/* Universidades */}
            <div className="form-group-inline">
                <div className="form-group">
                    <label>Universidad Local</label>
                    <select>
                        <option>Seleccionar Universidad</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Universidad Visitante</label>
                    <select>
                        <option>Seleccionar Universidad</option>
                    </select>
                </div>
            </div>

            {/* Entrenadores */}
            <div className="form-group-inline">
                <div className="form-group">
                    <label>Entrenador Local</label>
                    <select>
                        <option>Seleccionar Entrenador</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Entrenador Visitante</label>
                    <select>
                        <option>Seleccionar Entrenador</option>
                    </select>
                </div>
            </div>

            {/* Botones de acción */}
            <div className="form-buttons">
                <button className="save-btn">Guardar</button>
                <button className="cancel-btn">Cancelar</button>
            </div>
        </div>
    )
}

export default MatchForm