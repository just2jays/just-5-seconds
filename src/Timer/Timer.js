import React, { Component } from 'react';
import css from './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 500,
      isRunning: false
    }

    this.decimalPrecision = 3;
    this.dividerTime = 100;
    this.startingTime = 500;

    // Refs
    this.timerContainer = React.createRef();
    
    // Bindings
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.updateTimer = this.updateTimer.bind(this);

  }

  componentDidMount() {
    window.addEventListener('touchstart', function() {
      // the user touched the screen
      if(this.state.isGameOver) {
        this.reset();
        return;
      }

      if(this.state.isRunning){
        this.stop();
      }else{
        this.start();
      }
    });

    window.addEventListener('keydown', (event) => {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }

      if(event.keyCode == 32){
        // the user has pressed `space` key
        if(this.state.isGameOver) {
          this.reset();
          return;
        }
  
        if(this.state.isRunning){
          this.stop();
        }else{
          this.start();
        }
      }
      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    });
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

  start() {
    window.timerInterval = setInterval(this.updateTimer, 10);
    this.setState( {
      isRunning: true
    });
  }

  stop() {
    this.setState( {
      isRunning: false
    });
    clearInterval(window.timerInterval);

    // callback to update app with game results
    this.props.onTimerEnd(this.state);
  }

  reset() {
    this.setState( {
      isRunning: false,
      currentTime: this.startingTime
    });
    clearInterval(window.timerInterval);
  }

  render() {
    let time = this.state.currentTime / this.dividerTime;
    return(
      <div ref={this.timerContainer}>
        <div class="timer">{time.toPrecision(this.decimalPrecision)}</div>
      </div>
    );
  }
}

export default Timer;