import React, { Component } from 'react';
import propTypes from 'prop-types';

class EnterScore extends Component {
  static propTypes = {
    addScore: propTypes.func,
    addWinner: propTypes.func,
    updateStandings: propTypes.func,
  };

  state = {
    team1Name: 'teamBW',
    team1Score: 0,
    team2Name: 'teamFS',
    team2Score: 0,
  };

  handleInputChange = event => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  findWinner = event => {
    event.preventDefault();
    const { team1Name, team1Score, team2Name, team2Score } = this.state;
    const { addScore, addWinner, updateStandings } = this.props;
    const gameKey = `game${Date.now()}`;
    if (team1Name !== team2Name) {
      const scoreCard = {
        game: gameKey,
        team1Name,
        team1Score: parseInt(team1Score),
        team2Name,
        team2Score: parseInt(team2Score),
      };

      if (team1Score > team2Score) {
        const gameWinner = team1Name;
        const gameLoser = team2Name;
        const winnerCard = {
          game: gameKey,
          winner: gameWinner,
          loser: gameLoser,
        };
        updateStandings(gameWinner, gameLoser);
        addWinner(winnerCard);
      } else if (team1Score === team2Score) {
        const gameWinner = 'Draw';
        const winnerCard = {
          game: gameKey,
          winner: gameWinner,
          draw: [team1Name, team2Name],
        };
        addWinner(winnerCard);
      } else if (team1Score < team2Score) {
        const gameWinner = team2Name;
        const winnerCard = {
          game: gameKey,
          winner: gameWinner,
        };
        addWinner(winnerCard);
      }
      addScore(scoreCard);
    }
  };

  render() {
    const { teamDetails } = this.props;
    console.log(teamDetails);
    const teamList = teamDetails.map((team, index) => (
      <option key={index} teamid={team.teamName} value={team.teamId}>
        {team.teamName}
      </option>
    ));
    const { team1Name, team1Score, team2Name, team2Score } = this.state;
    return (
      <form className="submitScore" onSubmit={this.findWinner}>
        <fieldset>
          <label htmlFor="tm1Val">
            Team A
            <select
              id="tm1Val"
              name="team1Name"
              value={team1Name}
              onChange={this.handleInputChange}
            >
              {teamList}
            </select>
          </label>
          <label htmlFor="tm1sc">
            Score
            <input
              id="tm1sc"
              name="team1Score"
              type="number"
              value={team1Score}
              onChange={this.handleInputChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="tm2nm">
            Team B
            <select
              id="tm2nm"
              name="team2Name"
              value={team2Name}
              onChange={this.handleInputChange}
            >
              {teamList}
            </select>
          </label>
          <label htmlFor="tm2sc">
            Score
            <input
              id="tm2sc"
              name="team2Score"
              type="number"
              value={team2Score}
              onChange={this.handleInputChange}
            />
          </label>
        </fieldset>
        <button type="submit">Submit Score</button>
      </form>
    );
  }
}

export default EnterScore;
