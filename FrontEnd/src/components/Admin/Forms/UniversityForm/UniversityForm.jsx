import './UniversityForm.css';
import usePost from "../../../../hooks/usePost.js";
import React, {useEffect, useState} from "react";
import {URLS} from "../../../../utils/serverRoutes.js";
import usePut from "../../../../hooks/usePut.js";
import useFetch from "../../../../hooks/useFetch.js";

const UniversityForm = ({onClose, id, refresh}) => {
    const [universityName, setUniversityName] = useState('');
    const [location, setLocation] = useState('');

    const {
        postData,
        loading: postLoading,
        error: postError,
    } = usePost(URLS.universityURLS.post);

    const {
        handlePut,
        loading: putLoading,
        error: putError,
    } = usePut();

    const {
        data: fetchedUniversityData,
        loading: loadingUniversity,
        error: errorUniversity,
    } = useFetch(id ? `${URLS.universityURLS.fetchOne}/${id}` : null);

    // Populate the form when editing
    useEffect(() => {
        if (id && fetchedUniversityData) {
            setUniversityName(fetchedUniversityData.name || '');
            setLocation(fetchedUniversityData.location || '');
        }
    }, [id, fetchedUniversityData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (id) {
            const updated = await handlePut(`${URLS.universityURLS.update}/${id}`, {
                name: universityName,
                location: location,
            });
            if (updated) {
                refresh()
                onClose()
            }


        } else {
            const created = await postData({
                name: universityName,
                location: location,
            });

            if (created) {
                refresh()
                onClose()
            }

        }
    }

    return (
        <div className="university-form-container">
            <h2 className="university-form-title">
                {id ? "Editar Universidad" : "Crear Universidad"}
            </h2>
            {loadingUniversity ? (
                <p>Cargando datos...</p>
            ) : (
                <form className="university-form" onSubmit={handleSubmit}>
                    <div className="university-form-group">
                        <label htmlFor="universityName">Nombre de la universidad:</label>
                        <input
                            type="text"
                            id="universityName"
                            placeholder="Ej. Universidad Centroamericana"
                            value={universityName}
                            onChange={(e) => setUniversityName(e.target.value)}
                            required
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
                            required
                        />
                    </div>
                    <div className="university-form-actions">
                        <button
                            type="submit"
                            className="save-button"
                            disabled={postLoading || putLoading}
                        >
                            {id ? "Actualizar" : "Guardar"}
                        </button>
                        <button type="button" onClick={onClose} className="cancel-button">
                            Cancelar
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default UniversityForm;
