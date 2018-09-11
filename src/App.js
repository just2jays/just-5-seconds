import React, { Component } from 'react';
import logo from './logo.svg';
import Timer from './Timer/Timer';
import Results from './Timer/Timer';
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
      results: results
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
      <div className="">
        <div className="topheader">
          <header className="container">
          <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
              </a>
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          </nav>
          </header>
        </div>
        <section className="results--section">
          <div className="container">
            <Timer
              onTimerEnd={this.handleGameResults}
            />
            <Results

            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
