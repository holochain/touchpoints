import React, { Component } from 'react';

import './App.css';

import { Route, Link } from 'react-router-dom'

import ProfileContainer from './ProfileContainer'
import DemonstrationContainer from './DemonstrationContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">TOUCHPOINT</header>
        <div className="container">
          <div className="spinner transition500"></div>
          <div className="error transition500"></div>
          <div id="content">
            <Route path="/demo" exact component={DemonstrationContainer} />
            <Route path="/profile" exact component={ProfileContainer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
