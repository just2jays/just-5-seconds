import React, { Component } from 'react';
import css from './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 500,
      isRunning: false
    }

    this.startingTime = 500;

    // Refs
    this.timerContainer = React.createRef();
    
    // Bindings
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  componentDidMount() {
    // Allow gameplay via keyboard
    window.addEventListener('keydown', (event) => {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
      if(event.keyCode === 32){
        this.toggleTimer();
      }
      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    });
  }

  toggleTimer() {
    switch(this.props.gameStatus) {
      case 'ready':
        this.start();
        break;
      case 'active':
        this.stop();
        break;
      case 'complete':
        this.reset();
        break;
      default:
        return;
    }
  }

  updateTimer() {
    if (this.state.currentTime <= 0) {
      // We have reached the end of the timer
      // clearInterval(counter);
      // return;
    }
    this.setState({
      currentTime: this.state.currentTime - 1
    });
  }

  // Start the timer
  start() {
    window.timerInterval = setInterval(this.updateTimer, 10);
    this.setState( {
      isRunning: true
    });

    // callback to alert of game started
    this.props.onTimerStart();
  }

  // Stop the timer
  stop() {
    this.setState( {
      isRunning: false
    });
    clearInterval(window.timerInterval);

    // callback to update app with game results
    this.props.onTimerEnd(this.state);
  }

  // Reset the timer to initial state
  reset() {
    this.setState( {
      isRunning: false,
      currentTime: this.startingTime
    });
    clearInterval(window.timerInterval);

    // callback to setup new game
    this.props.onTimerReset(this.state);
  }

  render() {
    const { gameStatus } = this.props;

    let time = this.state.currentTime;
    let buttonText;

    switch(gameStatus) {
      case 'complete':
        buttonText = 'RESET'
        break;
      case 'active':
        buttonText = 'STOP'
        break;
      default:
        buttonText = 'START'
        break;
    }

    return(
      <div ref={this.timerContainer}>
        <div className="box has-text-centered">
          <div className={css.timer}>{time}</div>
          <progress className="progress is-primary" value={this.state.currentTime} max="500">15%</progress>
        </div>
        <a
          className="button is-large is-fullwidth is-info is-rounded"
          onClick={this.toggleTimer}
        >
          {buttonText}
        </a>
      </div>
    );
  }
}

export default Timer;