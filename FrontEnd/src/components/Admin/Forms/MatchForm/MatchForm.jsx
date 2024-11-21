import React, {useState} from "react";
import './MatchForm.css'
import useFetch from "../../../../hooks/useFetch.js";
import {URLS} from "../../../../utils/serverRoutes.js";

const MatchForm = ({show, onClose}) => {
    if (!show) return null;
    const [sport, setSport] = useState('');
    const [firstUniv, setFirstUniv] = useState('');
    const [secondUniv, setSecondUniv] = useState('');
    const {
        data: fetchedSportsData,
        loading: loadingSports,
        error: errorSports,
        overFetch: fetchSports,
    } = useFetch(URLS.sportURLS.fetchAll);

    const {
        data: fetchedUniversitiesData,
        loading: loadingUniversities,
        error: errorUniversities,
        overFetch: fetchUniversities,
    } = useFetch(URLS.universityURLS.fetchAll);

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
                            <label htmlFor="university1">Universidad Local</label>
                            <select id="university1"
                                    name="university1"
                                    value={firstUniv}
                                    onChange={(e) => setFirstUniv(e.target.value)}
                                    required>
                                <option value="" disabled>
                                    {loadingUniversities ? 'Cargando deportes...' : 'Seleccionar Universidad'}
                                </option>
                                {fetchedUniversitiesData &&
                                    fetchedUniversitiesData.map((univ) => (
                                        <option key={univ._id} value={univ._id}>
                                            {univ.name}
                                        </option>
                                    ))}

                            </select>
                        </div>

                        <div className="form-group-inline">
                            <div className="form-group">
                                <label htmlFor="university1">Universidad Local</label>
                                <select id="university1"
                                        name="university1"
                                        value={secondUniv}
                                        onChange={(e) => setSecondUniv(e.target.value)}
                                        required>
                                    <option value="" disabled>
                                        {loadingUniversities ? 'Cargando deportes...' : 'Seleccionar Universidad'}
                                    </option>
                                    {fetchedUniversitiesData &&
                                        fetchedUniversitiesData.map((univ) => (
                                            <option key={univ._id} value={univ._id}>
                                                {univ.name}
                                            </option>
                                        ))}

                                </select>
                            </div>
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