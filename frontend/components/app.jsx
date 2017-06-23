import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderRouter from './header/header_router';

import Home from './home/home';

// bodies

import SessionPage from './session_page/session_page';
import BusinessShowContainer from './business/business_show_container';
import BusinessIndexContainer from './business/business_index_container';
import BusinessFormPage from './business/business_form_page';

import Footer from './footer';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className='page-container'>
    <HeaderRouter />

    <div className='body'>
      <Route exact path='/' component={Home} />

      <Switch>
        <ProtectedRoute path="/businesses/new" component={BusinessFormPage} />
        <ProtectedRoute path="/businesses/:id/edit"
          component={BusinessFormPage} />
        <Route path='/businesses/:id' component={BusinessShowContainer} />
        <Route path='/businesses' component={BusinessIndexContainer} />
      </Switch>



      <Switch>
        <AuthRoute path="/login" component={SessionPage} />
        <AuthRoute path="/signup" component={SessionPage} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
