import React, { Component } from 'react';

class PlayerStandings extends Component {
  render() {
    const { draws, losses, teamName, wins } = this.props.teamInfo;
    const teamPoints = wins * 3 + draws * 1;
    return (
      <React.Fragment>
        <div className="table-cell player-name">{teamName}</div>
        <div className="table-cell player-win">{wins}</div>
        <div className="table-cell player-draw">{draws}</div>
        <div className="table-cell player-loss">{losses}</div>
        <div className="table-cell goals-for" />
        <div className="table-cell goals-against" />
        <div className="table-cell goal-diff" />
        <div className="table-cell player-points">{teamPoints}</div>
      </React.Fragment>
    );
  }
}

export default PlayerStandings;
