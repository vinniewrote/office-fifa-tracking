import React, { Component } from 'react';
import _ from 'lodash';
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

  updateStandings = winner => {
    const teamSheet = _.cloneDeep(teams);
    teamSheet.find(b => b.teamId === winner).wins++;
    this.setState({
      teams: teamSheet,
    });
  };

  // updateEls = loser => {
  //   const lossSheet = _.cloneDeep(teams);
  //   lossSheet.find(l => l.teamId === loser).losses++;
  //   this.setState({
  //     teams: lossSheet,
  //   });
  // };

  addWinner = winner => {
    const { winners } = this.state;
    const winnerSet = { ...winners };
    winnerSet[`winner${Date.now()}`] = winner;
    this.setState({
      winners: winnerSet,
    });
  };

  render() {
    const { scores, teams } = this.state;
    return (
      <div className="soccerContainer">
        <div className="table-8cols team-table">
          <div className="table-cell team-name">Team</div>
          <div className="table-cell player-win">W</div>
          <div className="table-cell player-draw">D</div>
          <div className="table-cell player-loss">L</div>
          <div className="table-cell goals-for">GF</div>
          <div className="table-cell goals-against">GA</div>
          <div className="table-cell goal-diff">DIFF</div>
          <div className="table-cell team-points">Pts</div>
          {teams.map((team, index) => (
            <Standings key={index} teamInfo={team} />
          ))}
        </div>
        <EnterScore
          addScore={this.addScore}
          addWinner={this.addWinner}
          updateStandings={this.updateStandings}
          updateEls={this.updateEls}
          teamDetails={teams}
        />
        {Object.keys(scores).map(key => (
          <Scorecard key={key} details={scores[key]} />
        ))}
      </div>
    );
  }
}

export default Layout;
