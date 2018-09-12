import React, { Component } from 'react';
import css from './Results.css';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    // Refs
    this.resultsContainer = React.createRef();
  }

  render() {
    const { data } = this.props;
    let message = '';
    
    console.log(data);
    if( data.currentTime === undefined ) return null;

     if(data.currentTime == 0){
      message = 'On the 👃!! Great job!';
    }else if(data.currentTime < 0) {
      message = 'You were late by '+Math.abs(Number(data.currentTime/100))+' seconds';
    }else{
      message = 'You were early by '+Number(data.currentTime/100)+' seconds';
    }

    return(
      <div ref={this.resultsContainer}>
        <p class="title is-4 is-spaced">{message}</p>
        <p class="subtitle is-6">(Click or Tap to try again!)</p>
      </div>
    );
  }
}

export default Results;