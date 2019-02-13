import React, { Component } from 'react';

class PlayerStandings extends Component {
  render() {
    return (
      <div className="table-8cols player-table">
        <div className="table-cell player-name">Desus&amp;Mero</div>
        <div className="table-cell player-win">1</div>
        <div className="table-cell player-draw">0</div>
        <div className="table-cell player-loss">0</div>
        <div className="table-cell goals-for">6</div>
        <div className="table-cell goals-against">1</div>
        <div className="table-cell goal-diff">5</div>
        <div className="table-cell player-points">3</div>
      </div>
    );
  }
}

export default PlayerStandings;
