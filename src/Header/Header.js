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
      <nav className={`navbar ${css.navbar}`} aria-label="main navigation">
      <div className="container">
          <div className="navbar-brand">
            <a className={`navbar-item ${css.brand}`} href="/">
              Just 5 Seconds
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item" data-anchor="about">
                About
              </a>
              <a className="navbar-item" data-anchor="contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;