import React, {useEffect, useState} from "react";
import './TrainingForm.css'
import usePost from "../../../../hooks/usePost.js";
import {URLS} from "../../../../utils/serverRoutes.js";
import usePut from "../../../../hooks/usePut.js";
import useFetch from "../../../../hooks/useFetch.js";

const TrainingForm = ({show, onClose, id, refresh}) => {
    if (!show) return null;
    const [date, setDate] = useState('');
    const [sport, setSport] = useState('');
    const [location, setLocation] = useState('');
    const [status, setStatus] = useState('');
    const [time, setTime] = useState('');

    // Fetch para obtener datos de deportes
    const {
        data: fetchedSportsData,
        loading: loadingSports,
        error: errorSports,
        overFetch: fetchSports,
    } = useFetch(URLS.sportURLS.fetchAll);

    const {
        postData,
        loading: postLoading,
        error: postError,
    } = usePost(URLS.trainURLS.post);

    const {
        handlePut,
        loading: putLoading,
        error: putError,
    } = usePut();

    const {
        data: fetchedTrainData,
        loading: loadingTrain,
        error: errorTrain,
    } = useFetch(id ? `${URLS.trainURLS.fetchOne}/${id}` : null);

    // Populate the form when editing
    useEffect(() => {
        if (id && fetchedTrainData) {

            setSport(fetchedTrainData.sport || '');
            setLocation(fetchedTrainData.location || '');
            setStatus(fetchedTrainData.status || '');
            setTime(fetchedTrainData.time || '');

            if (fetchedTrainData.date) {
                const date = new Date(fetchedTrainData.date);
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                setDate(`${year}-${month}-${day}`);
            } else {
                setDate('');
            }

        }
    }, [id, fetchedTrainData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const trainData = {
            date,
            time,
            sport,
            location,
            status,
        };

        if (id) {
            // Actualizar un entrenamiento existente
            const updated = await handlePut(`${URLS.trainURLS.update}/${id}`, trainData);
            if (updated) {
                refresh(); // Refresca la lista de datos (si es necesario)
                onClose(); // Cierra el formulario o modal
            }
        } else {
            // Crear un nuevo entrenamiento
            const created = await postData(trainData);
            if (created) {
                refresh(); // Refresca la lista de datos
                onClose(); // Cierra el formulario o modal
            }
        }
    };


    return (
        <div className="modal-style">
            <div className="modal-content-style">
                <button className="modal-close-btn" onClick={onClose}>
                    &times;
                </button>
                <div className="training-form-container">
                    <h2 className="training-form-title">Información sobre el entrenamiento</h2>
                    {loadingTrain ? (
                        <p>Cargando datos...</p>
                    ) : (
                        <form className="training-form" onSubmit={handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="sport">Deporte</label>
                                <select
                                    id="sport"
                                    name="sport"
                                    value={sport}
                                    onChange={(e) => setSport(e.target.value)}
                                    required
                                >
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
                                {errorSports && <p className="error-text">Error al cargar deportes</p>}
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
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    required
                                />
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
                                    <input type="time" id="time" name="time"     value={time}
                                           onChange={(e) => setTime(e.target.value)}
                                            required/>
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


                        </form>)}
                </div>
            </div>

        </div>

    );
};

export default TrainingForm;
