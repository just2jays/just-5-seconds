import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header/Header';
import Timer from './Timer/Timer';
import Results from './Results/Results';
import css from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: 'ready', // possible options: ready, active, complete
      lastResults: {}
    }

    // Bindings
    this.handleGameResults = this.handleGameResults.bind(this);
  }

  componentDidMount() {
    // Allow gameplay via touch devices
    window.addEventListener('touchstart', function() {
      // the user touched the screen
      switch(this.state.gameStatus) {
        case 'ready':
          this.setState({
            gameStatus: 'active'
          });
          break;
        case 'active':
          this.setState({
            gameStatus: 'complete'
          });
          break;
        case 'complete':
          this.setState({
            gameStatus: 'ready',
            lastResults: {}
          });
          break;
        default:
          return;
      }
    }.bind(this));

    // Allow gameplay via keyboard
    window.addEventListener('keydown', (event) => {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }

      if(event.keyCode === 32){
        switch(this.state.gameStatus) {
          case 'ready':
            this.setState({
              gameStatus: 'active'
            });
            break;
          case 'active':
            this.setState({
              gameStatus: 'complete'
            });
            break;
          case 'complete':
            this.setState({
              gameStatus: 'ready',
              lastResults: {}
            });
            break;
          default:
            return;
        }
      }
      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    });
  }

  handleGameResults(results) {
    this.setState({
      gameStatus: 'complete',
      lastResults: results
    });
  }

  render() {
    let color = {backgroundColor: 'initial'};

    console.log(this.state.lastResults);
    if(this.state.lastResults.currentTime === undefined){
      color = {backgroundColor: 'initial'};
    }else if(this.state.lastResults.currentTime <= 9) {
      color = {backgroundColor: '#6ab04c'};
    }else if(this.state.lastResults.currentTime <= 50) {
      color = {backgroundColor: '#f9ca24'};
    }else{
      color = {backgroundColor: '#eb4d4b'};
    }

    return (
      <div className={css.appContainer} style={color}>
        <Header />
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <Timer
                onTimerEnd={this.handleGameResults}
                {...this.state}
              />
            </div>
          </div>
        </section>
        <section className="results">
          <div className="container has-text-centered">
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
