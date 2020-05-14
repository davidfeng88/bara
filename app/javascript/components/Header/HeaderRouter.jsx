import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import SessionHeader from './SessionHeader';
import BusinessHeaderContainer from './BusinessHeaderContainer';

const HeaderRouter = () => (
  <header>
    <Switch>
      <Route exact path="/" component={null} />
      <Route path="/businesses" component={BusinessHeaderContainer} />
      <Route path="/reviews" component={BusinessHeaderContainer} />
      <Route path="/" component={SessionHeader} />
    </Switch>
  </header>
);

export default HeaderRouter;
