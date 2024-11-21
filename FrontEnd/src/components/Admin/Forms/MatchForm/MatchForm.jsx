import React, {useState} from "react";
import './MatchForm.css'
import useFetch from "../../../../hooks/useFetch.js";
import {URLS} from "../../../../utils/serverRoutes.js";

const MatchForm = ({show, onClose}) => {
    if (!show) return null;
    const [sport, setSport] = useState('');
    const {
        data: fetchedSportsData,
        loading: loadingSports,
        error: errorSports,
        overFetch: fetchSports,
    } = useFetch(URLS.sportURLS.fetchAll);

    return (
        <div className="modal-style">
            <div className="modal-content-style">
                <button className="modal-close-btn" onClick={onClose}>
                    &times;
                </button>
                <div className="match-form-container">
                    <h2 className="match-form-title">Información Sobre Partido</h2>

                    {/* Campo de selección de Deporte */}
                    <div className="form-group">
                        <label htmlFor="sport">Deporte</label>
                        <select id="sport"
                                name="sport"
                                value={sport}
                                onChange={(e) => setSport(e.target.value)}
                                required>
                            <option value="" disabled>
                                {loadingSports ? 'Cargando deportes...' : 'Seleccionar Deporte'}
                            </option>
                            {fetchedSportsData &&
                                fetchedSportsData.map((sport) => (
                                    <option key={sport._id} value={sport._id}>
                                        {sport.name}
                                    </option>
                                ))}
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
                        <button className="cancel-btn" onClick={onClose}>Cancelar</button>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default MatchForm