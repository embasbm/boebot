import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DiariesContainer from './components/DiariesContainer';

class App extends Component {
  render() {
    return (
      <div className="BoeApp">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">B.O.E</h1>
        </header>
        <DiariesContainer />
      </div>
    );
  }
}

export default App;
