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
                    <div className={'btn-training-status-container'}>
                        <button role="img" aria-label="no-decidido" className="status-icon training-status-btn"><i
                            className="fa-regular fa-face-meh"></i> <span className={'doubt'}>No decidido</span>
                        </button>
                    </div>
                )}
                {training.status === "Cancelado" && (
                    <div className={'btn-training-status-container'}>
                        <button role="img" aria-label="cancelado" className="status-icon training-status-btn"><i
                            className="fa-regular fa-face-frown-open"></i> <span className={'cancel'}>Cancelado</span>
                        </button>
                    </div>
                )}
                {training.status === "Confirmado" && (
                    <div className={'btn-training-status-container'}>
                        <button role="img" aria-label="confirmado" className="status-icon training-status-btn"><i
                            className="fa-regular fa-face-smile"></i> <span className={'confirm'}>Confirmado</span></button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TrainingCard