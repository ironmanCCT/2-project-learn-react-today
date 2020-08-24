import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home.js';
import Login from './login/Login';
import Registration from './login/Registration'
import Header from './Header'
import PrivateRoute from '../routes/PrivateRoute'
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Header}/>
        <Switch>
          <PrivateRoute exact path="/home" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/registration" component={Registration}/>
          
        </Switch>
      </Router>
    );
  }
}

export default Routes;
