import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import HomeHeaderContainer from './home/home_header_container';

import SessionPage from './session_page/session_page';

import Footer from './footer.jsx';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>

    <Route exact path='/' component={HomeHeaderContainer} />

    <Switch>
      <AuthRoute path="/login" component={SessionPage} />
      <AuthRoute path="/signup" component={SessionPage} />
    </Switch>

    <Footer />
  </div>
);

export default App;
