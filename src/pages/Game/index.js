import React, { Component } from 'react';
import Timer from '../../Timer/Timer';
import Results from '../../Results/Results';
import last from 'lodash/last';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: 'ready', // possible options: ready, active, complete
      scores: []
    }

    // Bindings
    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleGameEnd = this.handleGameEnd.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleGameStart(results) {
    this.setState({
      gameStatus: 'active'
    });
  }

  handleGameEnd(results) {
    this.setState({
      gameStatus: 'complete',
      scores: [...this.state.scores, results]
    });
  }

  handleNewGame() {
    this.setState({
      gameStatus: 'ready',
    });
  }

  render() {
    let lastResult = last(this.state.scores);
    let color = {backgroundColor: 'initial'};

    if(lastResult !== undefined && this.state.gameStatus === 'complete') {
      if(lastResult.currentTime <= 9) {
        color = {backgroundColor: '#6ab04c'};
      }else if(lastResult.currentTime <= 50) {
        color = {backgroundColor: '#f9ca24'};
      }else{
        color = {backgroundColor: '#eb4d4b'};
      }
    }
    
    return (
      <section className={`section`} style={color}>
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <Timer
              onTimerStart={this.handleGameStart}
              onTimerEnd={this.handleGameEnd}
              onTimerReset={this.handleNewGame}
              {...this.state}
            />
            <Results
              {...this.state}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Game;