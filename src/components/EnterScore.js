import React, { Component } from 'react';
import teams from '../data/team-manifest';

class EnterScore extends Component {
  state = {
    team1Name: 'Break Windu',
    team1Score: 0,
    team2Name: 'Bro Montana',
    team2Score: 0,
  };

  handleChange = event => {
    this.setState({ team1Score: event.target.value });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  findWinner = event => {
    event.preventDefault();
    const { team1Name, team1Score, team2Name, team2Score } = this.state;
    const gameKey = `game${Date.now()}`;
    if (team1Name !== team2Name) {
      const scoreCard = {
        game: gameKey,
        team1Name,
        team1Score,
        team2Name,
        team2Score,
      };

      if (team1Score > team2Score) {
        const gameWinner = team1Name;
        const winnerCard = {
          game: gameKey,
          winner: gameWinner,
        };

        this.props.addWinner(winnerCard);
      } else if (team1Score === team2Score) {
        const gameWinner = 'Draw';
        const winnerCard = {
          game: gameKey,
          winner: gameWinner,
        };
        this.props.addWinner(winnerCard);
      } else if (team1Score < team2Score) {
        const gameWinner = team2Name;
        const winnerCard = {
          game: gameKey,
          winner: gameWinner,
        };
        this.props.addWinner(winnerCard);
      }
      this.props.addScore(scoreCard);
    }
    event.currentTarget.reset();
  };

  render() {
    const teamList = teams.map(team => (
      <option value={team.teamName} key={team.teamName}>
        {team.teamName}
      </option>
    ));

    return (
      <form className="submitScore" onSubmit={this.findWinner}>
        <fieldset>
          <label>
            Team A
            <select
              name="team1Name"
              type="select"
              value={this.state.team1Name}
              onChange={this.handleInputChange}
            >
              {teamList}
            </select>
          </label>
          <label>
            <input
              name="team1Score"
              type="number"
              value={this.state.team1Score}
              onChange={this.handleInputChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            Team B
            <select
              name="team2Name"
              type="select"
              value={this.state.team2Name}
              onChange={this.handleInputChange}
            >
              {teamList}
            </select>
          </label>
          <label>
            <input
              name="team2Score"
              type="number"
              value={this.state.team2Score}
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
