import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';

import SessionPage from './session_page/session_page';
// import SessionFormContainer from './session_form/session_form_container';
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';

import Footer from './footer.jsx';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>

    <header>
      <GreetingContainer />

    </header>

    <Switch>
      <AuthRoute path="/login" component={SessionPage} />
      <AuthRoute path="/signup" component={SessionPage} />
    </Switch>

    <Footer />
  </div>
);

export default App;

// <Switch>
//   <Route exact path='/' component={HomeHeaderContainer} />
// HomeHeader
//  AuthHeader
//  default header!
// <Link to="/" className="header-link">
//   <h1>Bara</h1>
// </Link>

// <ProtectedRoute path="/benches/new" component={BenchFormContainer} />
// <Route path="/benches/:benchId" component={BenchShowContainer} />
// <Route exact path="/" component={SearchContainer} />
