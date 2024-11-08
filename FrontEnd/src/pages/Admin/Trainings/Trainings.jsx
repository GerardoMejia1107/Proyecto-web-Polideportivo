import HeaderAdmin from "../../../components/Admin/HeaderAdmin/HeaderAdmin.jsx";
import "./Trainings.css";
import NavAdmin from "../../../components/Admin/NavAdmin/NavAdmin.jsx";
import Header from "../../../components/Common/Header/Header.jsx";
import React from "react";

const Trainings = () => {
    return (
        <section className={'content'}>
            <NavAdmin/>
            <Header message={'Visualiza tus eventos deportivos transcurriendo'}/>
            <div className="training-form-container">
                <h2 className="training-form-title">Información Sobre Entrenamiento</h2>
                <form>
                    <div className="form-group">
                        <label>Deporte</label>
                        <select>
                            <option>Seleccionar Deporte</option>
                            {/* Opciones adicionales */}
                        </select>
                    </div>
                    
                    <div className="form-group-inline">
                        <div className="form-group">
                            <label>Fecha</label>
                            <input type="date" />
                        </div>
                        <div className="form-group">
                            <label>Hora</label>
                            <input type="time" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Ubicación</label>
                        <input type="text" placeholder="Ej. Gimnasio, Cancha 1, etc." />
                    </div>

                    <div className="form-group-inline">
                        <div className="form-group">
                            <label>Entrenador Principal</label>
                            <select>
                                <option>Seleccionar Entrenador</option>
                                {/* Opciones adicionales */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Entrenador Asistente</label>
                            <select>
                                <option>Seleccionar Entrenador</option>
                                {/* Opciones adicionales */}
                            </select>
                        </div>
                    </div>

                    <div className="form-buttons">
                        <button type="submit" className="save-btn">Guardar</button>
                        <button type="button" className="cancel-btn">Cancelar</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Trainings;
