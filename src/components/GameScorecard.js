import React, { Component } from 'react';

class GameScorecard extends Component {
  render() {
    const { game, team1, team2, team1Score, team2Score } = this.props.details;
    return (
      <div className="card-block">
        <div className="game-block">
          <div className="game-number">{game}</div>
          <div className="player-1">
            <div className="player-name">{team1}</div>
            <div className="player-score">{team1Score}</div>
          </div>
          <div className="player-1">
            <div className="player-name">{team2}</div>
            <div className="player-score">{team2Score}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameScorecard;
