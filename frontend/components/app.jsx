import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderRouter from './header/header_router';

// bodies

import SessionFormContainer from './session/session_form_container';
import BusinessShowContainer from './business/business_show_container';
// import BusinessIndexContainer from './business/business_index_container';
import SearchContainer from './search/search_container';

import BusinessFormContainer from './business/business_form_container';

import Footer from './footer';

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
