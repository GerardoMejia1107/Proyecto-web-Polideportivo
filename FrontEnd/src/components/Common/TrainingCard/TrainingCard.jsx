import './TrainingCard.css'
import React from "react";

const TrainingCard = ({ training }) => {
    return (
        <div className="training-card">
            <div className="training-day">{training.day}</div>
            <div className="training-time">Hora: {training.time}</div>
            <div className="training-place">Lugar: {training.place}</div>
            <div className={`training-status ${training.status.replace(" ", "-").toLowerCase()}`}>
                {training.status === "No decidido" && (
                    <>
                        <button role="img" aria-label="no-decidido" className="status-icon training-status-btn"><i
                            className="fa-regular fa-face-meh"></i></button> No decidido
                    </>
                )}
                {training.status === "Cancelado" && (
                    <>
                        <button role="img" aria-label="cancelado" className="status-icon training-status-btn"><i
                            className="fa-regular fa-face-frown-open"></i></button> Cancelado
                    </>
                )}
                {training.status === "Confirmado" && (
                    <>
                        <button role="img" aria-label="confirmado" className="status-icon training-status-btn"><i
                            className="fa-regular fa-face-smile"></i></button> Confirmado
                    </>
                )}
            </div>
        </div>
    )
}

export default TrainingCard