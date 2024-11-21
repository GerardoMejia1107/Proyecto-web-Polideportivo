import React from "react";
import './Trainevent.css'

const TrainEvent = ({train}) => {
    { return train.visibility ?  (
        <div
            key={train.id}
            className="admin-home-training-item"
        >
            <i className="fas fa-circle admin-home-training-status-icon"></i>
            <table className="admin-home-training-details">
                <tbody>
                <tr className="admin-home-training-info">
                    <td className="admin-home-training-cell">Deporte:</td>
                    <td className="admin-home-training-cell">{train.sport.name}</td>
                </tr>
                <tr className="admin-home-training-info">
                    <td className="admin-home-training-cell">Hora:</td>
                    <td className="admin-home-training-cell">{train.time}</td>
                </tr>
                <tr className="admin-home-training-info">
                    <td className="admin-home-training-cell">Lugar:</td>
                    <td className="admin-home-training-cell">{train.location}</td>
                </tr>
                </tbody>
            </table>
        </div>
    ) : ''}
}

export default TrainEvent