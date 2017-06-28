import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderRouter from './header/header_router';
import Footer from './footer';

// forms
import SessionFormContainer from './session_form/session_form_container';
import BusinessFormContainer from './business_form/business_form_container';
import ReviewFormContainer from './review_form/review_form_container';

// Other Pages
// import BusinessIndexContainer from './search/business_index_container';
import SearchContainer from './search/search_container';
import BusinessShowContainer from './business_show/business_show_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div  className='page-container'>
      <HeaderRouter />

      <div className='body'>

        <Switch>
          <ProtectedRoute path="/businesses/new"
            component={BusinessFormContainer} />
          <ProtectedRoute path="/businesses/:id/edit"
            component={BusinessFormContainer} />
          <ProtectedRoute path="/businesses/:business_id/reviews/new"
            component={ReviewFormContainer} />
          <ProtectedRoute path="/reviews/:id/edit"
            component={ReviewFormContainer} />
          <Route path='/businesses/:id' component={BusinessShowContainer} />
          <Route path='/businesses' component={SearchContainer} />

        </Switch>

        <Switch>
          <AuthRoute path="/login" component={SessionFormContainer} />
          <AuthRoute path="/signup" component={SessionFormContainer} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
