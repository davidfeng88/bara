import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import {
  AuthRoute,
  ProtectedRoute,
} from '../util/RouteUtil';

import HeaderRouter from './Header/HeaderRouter';

import BusinessFormContainer from './BusinessForm/BusinessFormContainer';
import ReviewFormContainer from './ReviewForm/ReviewFormContainer';
import SessionFormContainer from './SessionForm/SessionFormContainer';

import BusinessShowContainer from './BusinessShow/BusinessShowContainer';
import SearchContainer from './Search/SearchContainer';
import HomeContainer from './Home/HomeContainer';

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
        <Route exact path="/" component={HomeContainer} />
        <Route component={FourZeroFour} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
