import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';

export const routes = (
  <Switch>
    <Route path='/'>
      <Home />
    </Route>
    <Route path='*'>
      thing
    </Route>
  </Switch>
);