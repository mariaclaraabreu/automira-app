import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Administration from '../pages/Administration';
import RegisterOffer from '../pages/RegisterOffer';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/administration" component={Administration}/>
    <Route path="/register" component={RegisterOffer}/>
  </Switch>
);

export default Routes;

