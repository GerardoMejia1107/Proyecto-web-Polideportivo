import './TrainingCard.css'
import React, {useEffect} from "react";

const TrainingCard = ({training, refresh}) => {

    return (
        <div className="training-card">
            <div className="training-day">
                {(() => {
                    const date = new Date(training.date);
                    const day = String(date.getUTCDate()).padStart(2, '0'); // Día en UTC
                    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Mes en UTC (0-indexado)
                    const year = date.getUTCFullYear(); // Año en UTC
                    return `${day}/${month}/${year}`;
                })()}
            </div>

            <div className="training-time">Hora: {training.time}</div>
            <div className="training-place">Lugar: {training.location}</div>
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
                            className="fa-regular fa-face-smile"></i> <span className={'confirm'}>Confirmado</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TrainingCard