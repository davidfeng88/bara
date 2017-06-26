import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderRouter from './header/header_router';

import Home from './home/home';

// bodies

import SessionFormContainer from './session/session_form_container';
import BusinessShowContainer from './business/business_show_container';
import BusinessIndexContainer from './business/business_index_container';
import BusinessForm from './business/business_form';

import Footer from './footer';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className='page-container'>
    <HeaderRouter />

    <div className='body'>
      <Route exact path='/' component={Home} />

      <Switch>
        <ProtectedRoute path="/businesses/new" component={BusinessForm} />
        <ProtectedRoute path="/businesses/:id/edit"
          component={BusinessForm} />
        <Route path='/businesses/:id' component={BusinessShowContainer} />
        <Route path='/businesses' component={BusinessIndexContainer} />
      </Switch>



      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
