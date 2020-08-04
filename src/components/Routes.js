import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home.js';
import Login from './login/Login';
import Registration from './login/Registration'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/registration" component={Registration}/>
          
        </Switch>
      </Router>
    );
  }
}

export default Routes;
