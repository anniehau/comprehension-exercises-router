import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users';
import StrictAccess from './StrictAccess';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    const greetings = 'Good Morning'
    const user = { username: 'joao', password: '1234', }

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/users/:id" render={(props) => <Users { ...props } greetingsMessage={greetings} />} />
          <Route path="/strict-access" render={(props) => <StrictAccess { ...props } user={user} />} />
          <Route path="/" component={Home} />
        </Switch>
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/about"> About </Link></li>
          <li><Link to="/users"> Users </Link></li>
          <li><Link to="/strict-access"> Strict Access </Link></li>
        </ul>
      </BrowserRouter>
    );
  }
}

export default App;
