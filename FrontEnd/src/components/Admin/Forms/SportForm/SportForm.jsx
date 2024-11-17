/* eslint-disable react/prop-types */
import React, {useState, useEffect} from "react";
import "./SportForm.css";
import usePost from "../../../../hooks/usePost.js";
import usePut from "../../../../hooks/usePut.js";
import {URLS} from "../../../../utils/serverRoutes.js";
import useFetch from "../../../../hooks/useFetch.js";


const SportForm = ({onClose, id, refresh}) => {
    const [sportName, setSportName] = useState("");

    const {
        postData,
        loading: postLoading,
        error: postError,
        data: postDataResponse,
    } = usePost(URLS.sportURLS.post);

    const {
        handlePut,
        loading: putLoading,
        error: putError,
    } = usePut();

    const {
        data: fetchedSportData,
        loading: loadingSport,
        error: errorSport,
    } = useFetch(id ? `${URLS.sportURLS.fetchOne}/${id}` : null);


    useEffect(() => {
        if (id && fetchedSportData) {
            setSportName(fetchedSportData.name || "");
        }
    }, [id, fetchedSportData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            const updated = await handlePut(`${URLS.sportURLS.update}/${id}`, {
                name: sportName,
            });
            if (updated) {
                refresh()
                onClose()
            }

        } else {
            const created = await postData({name: sportName});
            if (created) {
                refresh()
                onClose()
            }

        }
    };

    return (
        <div className="sport-form-container">
            <h2 className="sport-form-title">
                {id ? "Editar Deporte" : "Crear Deporte"}
            </h2>
            {loadingSport ? (
                <p>Cargando datos...</p>

            ) : (
                <form className="sport-form" onSubmit={handleSubmit}>
                    <div className="sport-form-group">
                        <label htmlFor="sportName" className="label-name">
                            Nombre del deporte:
                        </label>
                        <input
                            type="text"
                            id="sportName"
                            value={sportName}
                            onChange={(e) => setSportName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="sport-form-actions">
                        <button
                            type="submit"
                            className="save-button"
                            disabled={postLoading || putLoading}
                        >
                            {id ? "Actualizar" : "Guardar"}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="cancel-button"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default SportForm;
