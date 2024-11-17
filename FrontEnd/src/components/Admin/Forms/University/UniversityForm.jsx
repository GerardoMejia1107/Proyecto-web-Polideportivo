import './UniversityForm.css'
import usePost from "../../../../hooks/usePost.js";
import React, {useEffect, useState} from "react";
import {URLS} from "../../../../utils/routesFromServer.js";
import usePut from "../../../../hooks/usePut.js";

const UniversityForm = ({ onClose, id }) => {
    const [universityName, setUniversityName] = useState('');
    const [location, setLocation] = useState('');

    const {
        postData,
        loading: postLoading,
        error: postError,
        data: postDataResponse,
    } = usePost(URLS.universityURLS.post);

    const {
        handlePut,
        loading: putLoading,
        error: putError,
        success: putSuccess,
    } = usePut();

    useEffect(() => {

    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(id){
            await handlePut(
                `${URLS.universityURLS.post}/${id}`,
                {name: universityName, location: location},
                ""
            )
            onClose();
        }else{
            await postData({name: universityName, location: location});
            onClose();
        }
    };
    return (
        <div className="university-form-container">
                <h2 className="university-form-title">Datos</h2>
                <form className="university-form" onSubmit={handleSubmit}>
                    <div className="university-form-group">
                        <label htmlFor="universityName">Nombre de la universidad</label>
                        <input
                            type="text"
                            id="universityName"
                            placeholder="Ej. Universidad Centroamericana"
                            onChange={(e)=>setUniversityName(e.target.value)}
                        />
                    </div>
                    <div className="university-form-group">
                        <label htmlFor="location">Ubicación</label>
                        <input
                            type="text"
                            id="location"
                            placeholder="Ej. San Salvador, El Salvador"
                            onChange={(e)=>setLocation(e.target.value)}
                        />
                    </div>
                    <div className="university-form-group">
                        <label htmlFor="universityLogo">Logo de la universidad</label>
                        <input type="file" id="universityLogo" />
                    </div>
                    {postLoading && <p>Guardando...</p>}
                    {postError && <p>Error: {postError}</p>}
                    {postDataResponse && <p>Guardado exitosamente!</p>}
                    <div className="university-form-actions">
                        <button type="submit" className="save-button" disabled={postLoading}>Guardar</button>
                        <button onClick={onClose} className="cancel-button">Cancelar</button>
                    </div>
                </form>
            </div>
    );
};

export default UniversityForm;
