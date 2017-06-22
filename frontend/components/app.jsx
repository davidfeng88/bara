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

import SessionPage from './session_page/session_page';
import BusinessShowContainer from './business/business_show_container';
import BusinessIndexContainer from './business/business_index_container';

import Footer from './footer';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>

    <Route exact path='/' component={Home} />

    <Switch>
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
