import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Administration from '../pages/Administration';
import Offer from '../pages/Offer';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/administration" component={Administration}/>
  </Switch>
);

export default Routes;

