import React, { Component } from 'react';
import teams from '../data/team-manifest';

class EnterScore extends Component {
  constructor(props) {
    super(props);
    this.team1Ref = React.createRef();
    this.team1ScoreRef = React.createRef();
    this.team2Ref = React.createRef();
    this.team2ScoreRef = React.createRef();
  }

  findWinner = event => {
    event.preventDefault();
    const tm1sc = parseInt(this.team1ScoreRef.current.value);
    const tm2sc = parseInt(this.team2ScoreRef.current.value);
    const tm1 = this.team1Ref.current.value;
    const tm2 = this.team2Ref.current.value;
    const gameKey = `game${Date.now()}`;
    if (tm1 !== tm2) {
      const scoreCard = {
        game: gameKey,
        team1: tm1,
        team1Score: tm1sc,
        team2: tm2,
        team2Score: tm2sc,
      };

      if (tm1sc > tm2sc) {
        const gameWinner = tm1;
        const winnerCard = {
          game: gameKey,
          winner: gameWinner,
        };

        this.props.addWinner(winnerCard);
      } else if (tm1sc === tm2sc) {
        const gameWinner = 'Draw';
        const winnerCard = {
          game: gameKey,
          winner: gameWinner,
        };
        this.props.addWinner(winnerCard);
      } else if (tm1sc < tm2sc) {
        const gameWinner = tm2;
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
      <option key={team.teamName}>{team.teamName}</option>
    ));

    return (
      <form className="submitScore" onSubmit={this.findWinner}>
        <fieldset>
          <label htmlFor="">Name</label>
          <select className="team1" ref={this.team1Ref}>
            {teamList}
          </select>
          <label htmlFor="team1Score">Score</label>
          <input
            id="team1Score"
            type=""
            placeholder="2"
            ref={this.team1ScoreRef}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Name</label>
          <select className="team2" ref={this.team2Ref}>
            {teamList}
          </select>
          <label htmlFor="team2Score">Score</label>
          <input
            id="team2Score"
            type=""
            placeholder="2"
            ref={this.team2ScoreRef}
          />
        </fieldset>
        <button type="submit">Submit Score</button>
      </form>
    );
  }
}

export default EnterScore;
