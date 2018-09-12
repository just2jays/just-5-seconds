import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header/Header';
import Timer from './Timer/Timer';
import Results from './Results/Results';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: 'neutral', // possible options: active, complete, neutral
      lastResults: {}
    }

    // Bindings
    this.handleGameResults = this.handleGameResults.bind(this);
  }

  handleGameResults(results) {
    this.setState({
      gameStatus: 'complete',
      lastResults: results
    });
    
    // if(count == 0){
    //   $('.resultMessage').html('You nailed it!!! On the nose!!! WOW!!!');
    // }else if(count < 0) {
    //   $('.resultMessage').html('You were late by '+ Math.abs(Number(Number(count)/placeValues)) +' seconds');
    // }else{
    //   $('.resultMessage').html('You were early by '+ Number(Number(count)/placeValues) +' seconds');
    // }

    // // handle color display
    // if(Math.abs(count/placeValues) <= 0.09) {
    //   $('body').css('background-color', 'green');
    // }else if(Math.abs(count/placeValues) <= 0.3) {
    //   $('body').css('background-color', 'yellow');
    // }else if(Math.abs(count/placeValues) <= 0.7) {
    //   $('body').css('background-color', 'orange');
    // }else{
    //   $('body').css('background-color', 'red');
    // }

    // $('#results').show();
  }

  render() {
    return (
      <div className="appContainer">
        <Header />
        <section className="results--section">
          <div className="container">
            <Timer
              onTimerEnd={this.handleGameResults}
              {...this.state}
            />
            <Results
              data={this.state.lastResults}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
