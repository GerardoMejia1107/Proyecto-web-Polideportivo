/* eslint-disable react/prop-types */
import React, {useState, useEffect} from "react";
import "./SportForm.css";
import usePost from "../../../../hooks/usePost.js";
import usePut from "../../../../hooks/usePut.js";
import {URLS} from "../../../../utils/routesFromServer.js";
import {outcome} from "../../../../utils/sweetAlert.js";

const SportForm = ({onClose, id, urls}) => {
    // Hook para POST (crear) y PUT (editar)
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
        success: putSuccess,
    } = usePut();

    const [sportName, setSportName] = useState("");

    useEffect(() => {
        if (id) {
            // Aquí puedes cargar datos existentes si estás editando
            setSportName("Nombre de deporte existente"); // Simula un fetch o datos precargados
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            // Actualizar datos existentes
            const update = await handlePut(
                `${URLS.sportURLS.update}/${id}`,
                {name: sportName},
                ""
            );

            update ? outcome.success(): outcome.error();
        } else {
            // Crear un nuevo deporte
            const post = await postData({name: sportName});
            post ? outcome.success() : outcome.error();
        }
    };

    return (
        <div className="sport-form-container">
            <h2 className="sport-form-title">
                {id ? "Editar Deporte" : "Crear Deporte"}
            </h2>
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
                    />
                </div>
                {(postLoading || putLoading) && (
                    <p>{id ? "Actualizando..." : "Guardando..."}</p>
                )}
                {postError && <p>Error al guardar: {postError}</p>}
                {putError && <p>Error al actualizar: {putError}</p>}
                {postDataResponse && <p>Guardado exitosamente!</p>}
                {putSuccess && <p>Actualización exitosa!</p>}
                <div className="sport-form-actions">
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
        </div>
    );
};

export default SportForm;
