import React, { Component } from 'react';
import css from './Results.css';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    // Refs
    this.resultsContainer = React.createRef();
  }

  render() {
    return(
      <div ref={this.resultsContainer}>
        We're here too don't forget
      </div>
    );
  }
}

export default Results;