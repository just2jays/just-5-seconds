import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import css from './Results.css';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousScores: []
    }

    this.previousScores = [];

    // Refs
    this.resultsContainer = React.createRef();
  }

  // componentDidUpdate() {
  //   console.log('----- '+this.props.gameStatus+' ---------');
  //   console.log('   >>>>> ',this.props.lastResults);
  //   if (this.props.gameStatus === 'complete') {
  //     // this.previousScores.push(this.props.lastResults);
  //     this.setState({
  //       previousScores: [...this.state.previousScores, this.props.lastResults]
  //     })
  //   }
  // }

  render() {
    console.log(this.props);
    // const { lastResults } = this.props;
    // let message = '';
    
    // if( lastResults.currentTime === undefined ) return null;

    // if(lastResults.currentTime == 0){
    //   message = 'On the 👃!! Great job!';
    // }else if(lastResults.currentTime < 0) {
    //   message = 'You were late by '+Math.abs(Number(lastResults.currentTime/100))+' seconds';
    // }else{
    //   message = 'You were early by '+Number(lastResults.currentTime/100)+' seconds';
    // }

    return(
      <div ref={this.resultsContainer}>
        <table className="table">
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
      </div>
      // <div ref={this.resultsContainer}>
      //   <p class="title is-4 is-spaced">{message}</p>
      //   <p class="subtitle is-6">(Click or Tap to try again!)</p>
      // </div>
    );
  }
}

export default Results;