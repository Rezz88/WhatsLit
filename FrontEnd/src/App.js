import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Login from './views/login';
import Profile from './views/profile'
import Main from './views/main';
import Rating from './views/rating';
import Settings from './views/settings'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/profile" component={Profile} />
          {/* <Route path="/profile" render={(routeProps) => { 
          return <Profile history={routeProps.history} />}} /> */}
          
          <Route path="/ratings" component={Rating} />
          <Route path="/settings" component={Settings} />
          <Route path="/main" component={Main} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
