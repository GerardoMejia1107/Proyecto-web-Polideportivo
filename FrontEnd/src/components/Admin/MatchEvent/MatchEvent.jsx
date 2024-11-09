import './MatchEvent.css'
import React from "react";
const MatchEvent = ({ match }) => {
    return (
        <div className="admin-home-match-item">
            <i className="fas fa-circle admin-home-match-status-icon"></i>
            <div className="admin-home-match-details">
                <div className="admin-home-team-logos">
                    <img
                        src={match.equipo1Logo}
                        alt="Logo equipo 1"
                        className="admin-home-team-logo"
                    />
                    <h1 className="admin-home-match-versus">-</h1>
                    <img
                        src={match.equipo2Logo}
                        alt="Logo equipo 2"
                        className="admin-home-team-logo"
                    />
                </div>
                <table className="admin-home-match-details-table">
                    <tbody>
                    <tr className="admin-home-match-info">
                        <td className="admin-home-match-cell">Deporte:</td>
                        <td className="admin-home-match-cell">{match.deporte}</td>
                    </tr>
                    <tr className="admin-home-match-info">
                        <td className="admin-home-match-cell">Hora:</td>
                        <td className="admin-home-training-cell">{match.horario}</td>
                    </tr>
                    <tr className="admin-home-match-info">
                        <td className="admin-home-match-cell">Lugar:</td>
                        <td className="admin-home-match-cell">{match.lugar}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MatchEvent