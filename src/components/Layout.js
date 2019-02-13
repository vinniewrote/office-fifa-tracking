import React, { Component } from 'react';
import Standings from './PlayerStandings';
import Scorecard from './GameScorecard';
import EnterScore from './EnterScore';
import teams from '../data/team-manifest';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      teams,
      scores: {},
      winners: {},
    };
  }

  addScore = score => {
    const scoreSet = { ...this.state.scores };
    scoreSet[`score${Date.now()}`] = score;
    this.setState({
      scores: scoreSet,
    });
  };

  addWinner = winner => {
    const winnerSet = { ...this.state.winners };
    winnerSet[`winner${Date.now()}`] = winner;
    this.setState({
      winners: winnerSet,
    });
  };

  render() {
    return (
      <div className="fifa-container">
        <Standings />
        {Object.keys(this.state.scores).map(key => (
          <Scorecard key={key} details={this.state.scores[key]} />
        ))}
        <EnterScore addScore={this.addScore} addWinner={this.addWinner} />
      </div>
    );
  }
}

export default Layout;
