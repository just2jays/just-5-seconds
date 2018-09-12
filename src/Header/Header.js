import React, { Component } from 'react';
import css from './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                Just 5 Seconds
              </a>
              {/* <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a> */}
            </div>
          
        </div>
        </nav>
      
    );
  }
}

export default Header;