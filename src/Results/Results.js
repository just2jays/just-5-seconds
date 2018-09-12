import React, { Component } from 'react';
import last from 'lodash/last';
import css from './Results.css';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    // Refs
    this.resultsContainer = React.createRef();
  }

  render() {
    let lastResult = last(this.props.scores);
    let message = '';
    
    if( lastResult === undefined || this.props.gameStatus !== 'complete' ) return null;

    if(lastResult.currentTime === 0){
      message = 'On the 👃!! Great job!';
    }else if(lastResult.currentTime < 0) {
      message = 'You were late by '+Math.abs(Number(lastResult.currentTime/100))+' seconds';
    }else{
      message = 'You were early by '+Number(lastResult.currentTime/100)+' seconds';
    }

    return(
      <section className={`section`} ref={this.resultsContainer}>
      <div className="level">
        <p className="level-item has-text-centered">
          <span className={`${css.message} link is-info`}>{message}</span>
        </p>
      </div>
        <table className={`table is-fullwidth`}>
          <thead>
            <tr>
              <th>Attempt</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {this.props.scores.map((score, i) => {
                return(
                  <tr key={`scores_${i}`}>
                    <td>{i+1}</td>
                    <td>{score.currentTime}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </section>
    );
  }
}

export default Results;