import HeaderAdmin from "../../../components/Admin/HeaderAdmin/HeaderAdmin.jsx";
import React from "react";
import "./Universities.css";

const Universities = () => {
    return (
        <section className="content">
            <HeaderAdmin />
            <div className="university-form-container">
                <h2 className="form-title">Agregar Universidad</h2>
                <form className="university-form">
                    <div className="form-group">
                        <label htmlFor="universityName">Nombre de la Universidad</label>
                        <input
                            type="text"
                            id="universityName"
                            placeholder="Ej. Universidad Centroamericana"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="universityLogo">Logo de la Universidad</label>
                        <input type="file" id="universityLogo" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sportsArea">Área Deportiva</label>
                        <input
                            type="text"
                            id="sportsArea"
                            placeholder="Ej. Fútbol, Baloncesto, etc."
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Ubicación</label>
                        <input
                            type="text"
                            id="location"
                            placeholder="Ej. San Salvador, El Salvador"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Contacto</label>
                        <input
                            type="text"
                            id="contact"
                            placeholder="Ej. Teléfono o Email"
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="save-button">Guardar</button>
                        <button type="button" className="cancel-button">Cancelar</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Universities;
