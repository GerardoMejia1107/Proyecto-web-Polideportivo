import './UniversityForm.css'
const UniversityForm = ({ onClose }) => {
    return (
        <div className="university-form-container">
                <h2 className="university-form-title">Datos</h2>
                <form className="university-form">
                    <div className="university-form-group">
                        <label htmlFor="universityName">Nombre de la universidad</label>
                        <input
                            type="text"
                            id="universityName"
                            placeholder="Ej. Universidad Centroamericana"
                        />
                    </div>
                    <div className="university-form-group">
                        <label htmlFor="location">Ubicación</label>
                        <input
                            type="text"
                            id="location"
                            placeholder="Ej. San Salvador, El Salvador"
                        />
                    </div>
                    <div className="university-form-group">
                        <label htmlFor="universityLogo">Logo de la universidad</label>
                        <input type="file" id="universityLogo" />
                    </div>
                  
                    <div className="university-form-actions">
                        <button type="submit" className="save-button">Guardar</button>
                        <button onClick={onClose} className="cancel-button">Cancelar</button>
                    </div>
                </form>
            </div>
    );
};

export default UniversityForm;
