import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Home from './home/home';

// headers
import HomeHeader from './header/home_header';

import SessionHeader from './header/session_header';


// bodies

import SessionPage from './session_page/session_page';
import BusinessShowContainer from './business/business_show_container';
import BusinessIndexContainer from './business/business_index_container';
import BusinessFormPage from './business/business_form_page';

import Footer from './footer';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Switch>

        <Route exact path='/' component={HomeHeader} />
        <AuthRoute path="/login" component={SessionHeader} />
        <AuthRoute path="/signup" component={SessionHeader} />

      </Switch>
    </header>

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

    <Footer />
  </div>
);

export default App;
