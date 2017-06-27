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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // componentWillReceiveProps(newProps) {
  //   if ( this.props.poke && this.props.poke.id !== parseInt(newProps.match.params.pokemonId) ) {
  //     // THIS IS GETTING CALLED TWICE FOR NO REASON!!
  //     // console.log("REQUESTING POKEMON");
  //     this.props.requestOnePokemon(newProps.match.params.pokemonId);
  //   }
  // }

  handleClick(e) {
    e.preventDefault();
    if (this.props.showDropdown) {
      this.props.hideDropdown();
    }
  }

  render() {
    return (
      <div onClick={this.handleClick} className='page-container'>
        <HeaderRouter />

        <div className='body'>
        <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
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
  }

}

export default App;
