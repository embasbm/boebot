import React, { Component } from 'react';
import logo from './boe_logo.svg';
import './App.scss';
import DiariesContainer from './components/DiariesContainer';

class App extends Component {
  render() {
    return (
      <div className="boe">
        <header className="boe--header">
          <img src={logo} className="boe--logo" alt="logo" />
        </header>
        <DiariesContainer />
      </div>
    );
  }
}

export default App;
