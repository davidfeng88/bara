import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute } from '../../util/route_util';

import BusinessHeaderContainer from './business_header_container';
import HomeHeader from './home_header';
import SessionHeader from './session_header';

const HeaderRouter = () => (
  <header>
    <Switch>
      <Route path='/businesses' component={BusinessHeaderContainer} />
      <Route path='/' component={HomeHeader} />
      <AuthRoute path="/login" component={SessionHeader} />
      <AuthRoute path="/signup" component={SessionHeader} />
    </Switch>
  </header>
);

export default HeaderRouter;
