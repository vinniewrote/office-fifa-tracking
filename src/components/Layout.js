import React, { Component } from 'react';
import Standings from './PlayerStandings';
import Scorecard from './GameScorecard';
import EnterScore from './EnterScore';
import teams from '../data/team-manifest';

class Layout extends Component {
  state = {
    teams,
    scores: {},
    winners: {},
  };

  addScore = score => {
    const { scores } = this.state;
    const scoreSet = { ...scores };
    scoreSet[`score${Date.now()}`] = score;
    this.setState({
      scores: scoreSet,
    });
  };

  updateStandings = () => {
    const teamSheet = {
      ...this.state.teams,
    };
    console.log(teamSheet);
    const updatedSheet = teamSheet.map(item => {
      item.teamName = item.wins;

      return updatedSheet;
    });
    console.log(updatedSheet);
  };

  addWinner = winner => {
    const { winners } = this.state;
    const winnerSet = { ...winners };
    winnerSet[`winner${Date.now()}`] = winner;
    this.setState({
      winners: winnerSet,
    });
  };

  render() {
    const { scores } = this.state;
    return (
      <div className="soccerContainer">
        <Standings />
        <EnterScore
          addScore={this.addScore}
          addWinner={this.addWinner}
          updateStandings={this.updateStandings}
        />
        {Object.keys(scores).map(key => (
          <Scorecard key={key} details={scores[key]} />
        ))}
      </div>
    );
  }
}

export default Layout;
