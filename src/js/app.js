import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './style.scss';

import Welcome from './screens/welcome';
import About from './screens/about';

const Hello = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);

export default Hello;
