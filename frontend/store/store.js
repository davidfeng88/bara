import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../reducers/root_reducer';

const middlewares = [ thunk ];

if ( process.env.NODE_ENV !== 'production' ) {
  // must use 'require' (import only allowed at top of file)
  const {
    createLogger
  } = require( 'redux-logger' );
  middlewares.push( createLogger() );
}

const configureStore = ( preloadedState = {} ) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware( ...middlewares )
  )
);

export default configureStore;
