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
  }

  componentDidUpdate(prevProps) {
    if (this.props.gameStatus !== prevProps.gameStatus) {
      switch(this.props.gameStatus) {
        case 'active':
          this.start();
          break;
        case 'complete':
          this.stop();
          break;
        case 'ready':
          this.reset();
          break;
        default:
          return;
      }
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
  }

  render() {
    let time = this.state.currentTime;
    return(
      <div ref={this.timerContainer}>
        <div class="box">
          <div className={css.timer}>{time}</div>
        </div>
      </div>
    );
  }
}

export default Timer;