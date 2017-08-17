import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
