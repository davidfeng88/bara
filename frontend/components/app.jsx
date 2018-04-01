import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute,
} from '../util/RouteUtil';

import HeaderRouter from './header/HeaderRouter';

import BusinessFormContainer from './business_form/BusinessFormContainer';
import ReviewFormContainer from './review_form/ReviewFormContainer';
import SessionFormContainer from './session_form/SessionFormContainer';

import BusinessShowContainer from './business_show/BusinessShowContainer';
import SearchContainer from './search/SearchContainer';
import Home from './home/Home';

import FourZeroFour from './FourZeroFour';

import Footer from './Footer';

const App = () => (
  <div className="page-container">
    <HeaderRouter />
    <div className="body">
      <Switch>
        <ProtectedRoute
          path="/businesses/new"
          component={BusinessFormContainer}
        />
        <ProtectedRoute
          path="/businesses/:id/edit"
          component={BusinessFormContainer}
        />
        <ProtectedRoute
          path="/businesses/:business_id/reviews/new"
          component={ReviewFormContainer}
        />
        <ProtectedRoute
          path="/reviews/:id/edit"
          component={ReviewFormContainer}
        />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <Route path="/businesses/:id" component={BusinessShowContainer} />
        <Route path="/businesses" component={SearchContainer} />
        <Route exact path="/" component={Home} />
        <Route component={FourZeroFour} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
