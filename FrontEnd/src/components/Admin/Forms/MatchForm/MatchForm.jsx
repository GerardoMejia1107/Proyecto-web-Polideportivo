import React, {useState} from "react";
import './MatchForm.css'
import useFetch from "../../../../hooks/useFetch.js";
import {URLS} from "../../../../utils/serverRoutes.js";
import usePost from "../../../../hooks/usePost.js";

const MatchForm = ({show, onClose}) => {
    if (!show) return null;
    const [sport, setSport] = useState('');
    const [universityHome, setUniversityHome] = useState('');
    const [universityAway, setUniversityAway] = useState('');
    const [date, setDate] = useState(""); // Fecha del partido
    const [time, setTime] = useState(""); // Hora del partido
    const [location, setLocation] = useState(""); // Ubicación del partido
    const [status, setStatus] = useState(""); // Ubicación del partido


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

    const {
        postData,
        loading: postLoading,
        error: postError,
    } = usePost(URLS.matchURLS.post);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const matchData = {
            date,
            time,
            location,
            sport,
            universityHome,
            universityAway,
            status
        }
        const created = await postData(matchData);
        created && onClose()
    }


    return (
        <div className="modal-style">
            <div className="modal-content-style">
                <button className="modal-close-btn" onClick={onClose}>
                    &times;
                </button>
                <div className="match-form-container">
                    <h2 className="match-form-title">Información Sobre Partido</h2>

                    <form className={'match-form'} onSubmit={handleSubmit}>
                        {/* Campo de selección de Deporte */}

                        <div className="form-group">
                            <label htmlFor="sport">Deporte</label>
                            <select id="sport"
                                    name="sport"
                                    value={sport}
                                    onChange={(e) => setSport(e.target.value)}
                                    required>
                                <option value="" disabled>
                                    {loadingSports ? 'Cargando deportes...' : 'Seleccionar deporte'}
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
                                <label htmlFor="date">Fecha</label>
                                <input type="date" id="date" name="date" value={date}
                                       onChange={(e) => setDate(e.target.value)}
                                       required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="time">Hora</label>
                                <input type="time" id="time" name="time" value={time}
                                       onChange={(e) => setTime(e.target.value)}
                                       required/>
                            </div>
                        </div>

                        {/* Poster promocional */}
                        {/*<div className="form-group image-upload">
                        <label>Agrega un poster promocional del evento</label>
                        <div className="upload-box">
                            <i className="fa fa-image"></i>
                            <p>Buscar</p>
                        </div>
                    </div>*/}

                        <div className="form-group">
                            <label htmlFor="location">Lugar</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Ej. San Salvador, El Salvador"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                        </div>

                        {/* Universidades */}
                        <div className="form-group-inline">
                            <div className="form-group">
                                <label htmlFor="university1">Universidad Local</label>
                                <select id="university1"
                                        name="university1"
                                        value={universityHome}
                                        onChange={(e) => setUniversityHome(e.target.value)}
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
                                            value={universityAway}
                                            onChange={(e) => setUniversityAway(e.target.value)}
                                            required>
                                        <option value="" disabled>
                                            {loadingUniversities ? 'Cargando deportes...' : 'Seleccionar universidad'}
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

                        <div className="form-group">
                            <label htmlFor="status">Estado</label>
                            <select
                                id="status"
                                name="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            >
                                <option value="" disabled>
                                    Seleccionar Estado
                                </option>
                                <option value="Planificado">Planificado</option>
                                <option value="Cancelado">Cancelado</option>
                                <option value="En curso">En curso</option>
                                <option value="Finalizado">Finalizado</option>


                            </select>
                        </div>


                        {/* Botones de acción */}
                        <div className="form-buttons">
                            <button type={'submit'} className="save-btn">Guardar</button>
                            <button className="cancel-btn" onClick={onClose}>Cancelar</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    )
}

export default MatchForm