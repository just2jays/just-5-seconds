import React, { Component } from 'react';
import Router from './layout/Router';
import Header from './layout/Header';
import Footer from './layout/Footer';

class Layout extends Component {
  render() {
    return(
      <React.Fragment>
        <Header />
        <Router />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;