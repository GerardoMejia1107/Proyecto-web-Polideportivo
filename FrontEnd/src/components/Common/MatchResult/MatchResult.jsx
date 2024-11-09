import React from "react";
import "./MatchResult.css";

const MatchResult = ({ match }) => {
  const isTeamAWinner = match.teamA.score > match.teamB.score;
  const isDraw = match.teamA.score === match.teamB.score;

  return (
    <div className="match-card-with-score">
      <div className="match-sport-title">
        <h3>{match.sport}</h3>
      </div>
      <div className="teams-score-row">
        <div className="team-with-logo">
          <img
            src={match.teamA.logo}
            alt={match.teamA.name}
            className="team-logo"
          />
        </div>
        <div className="score-display">
          <span className={`team-score ${isDraw ? "draw" : isTeamAWinner ? "winner" : "loser"}`}>
            {match.teamA.score}
          </span>
          <span className="score-separator">-</span>
          <span className={`team-score ${isDraw ? "draw" : isTeamAWinner ? "loser" : "winner"}`}>
            {match.teamB.score}
          </span>
        </div>
        <div className="team-with-logo">
          <img
            src={match.teamB.logo}
            alt={match.teamB.name}
            className="team-logo"
          />
        </div>
      </div>
      <div className="match-info">
        <p>{`${match.date}, ${match.time}`}</p>
      </div>
      <button className="gallery-button">Ver Galería</button>
    </div>
  );
};

export default MatchResult;
