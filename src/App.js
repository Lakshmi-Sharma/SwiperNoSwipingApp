import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './jsx/Clock.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Clock/>
      </div>
    );
  }
}

export default App;
