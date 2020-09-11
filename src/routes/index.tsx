import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Administration from '../pages/Administration'
import RegisterOffer from '../pages/RegisterOffer'
import Offers from '../pages/Offers'
import IndividualOffer from '../pages/IndividualOffer'

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/administration' component={Administration} />
    <Route path='/offers/new' component={RegisterOffer} />
    <Route path='/offers' component={Offers} />
    <Route path='/ind' component={IndividualOffer} />
  </Switch>
)

export default Routes
