import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";
import Login from './components/login';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Login> </Login>
      </div>
    );
  }
}

export default App;