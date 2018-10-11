import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from './components/login';
import Dashboard from './components/dashboard';
import Employees from './components/employees';
import Gems from './components/gems';
import Leaves from './components/leaves';
import Projects from './components/projects';
import Clients from './components/clients';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/employees" component={Employees}/>
          <Route exact path="/gems" component={Gems}/>
          <Route exact path="/leaves" component={Leaves}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/clients" component={Clients}/>
        </div>
      </Router>
    );
  }
}

export default App;
