import React, { Component } from 'react';
import propTypes from 'prop-types';

class GameScorecard extends Component {
  static propTypes = {
    details: propTypes.shape({
      game: propTypes.string,
      team1Name: propTypes.string,
      team1Score: propTypes.number,
      team2Name: propTypes.string,
      team2Score: propTypes.number,
    }),
  };

  render() {
    const {
      details: { game, team1Name, team2Name, team1Score, team2Score },
    } = this.props;
    return (
      <div className="card-block">
        <div className="game-block">
          <div className="game-number">{game}</div>
          <div className="player-1">
            <div className="player-1-name">{team1Name}</div>
            <div className="player-1-score">{team1Score}</div>
          </div>
          <div className="player-2">
            <div className="player-2-name">{team2Name}</div>
            <div className="player-2-score">{team2Score}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameScorecard;
