import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SessionHeader from './session_header';
import HomeHeader from './home_header';
import BusinessHeaderContainer from './business_header_container';

const HeaderRouter = () => (
  <header>
    <Switch>
      <Route exact path='/' component={HomeHeader} />
      <Route path='/businesses' component={BusinessHeaderContainer} />
      <Route path="/" component={SessionHeader} />
    </Switch>
  </header>
);

export default HeaderRouter;
