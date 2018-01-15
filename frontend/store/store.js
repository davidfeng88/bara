import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const configureMiddlewares = () => {
  const middlewares = [ thunk ];
  if ( process.env.NODE_ENV !== 'production' ) {
    addReduxLoggerToMiddleware( middlewares );
  }
  return middlewares;
};

const addReduxLoggerToMiddleware = ( middlewares ) => {
  // must use 'require' (import only allowed at top of file)
  const {
    createLogger
  } = require( 'redux-logger' );
  middlewares.push( createLogger() );
};

const configurePreloadedState = () => {
  let preloadedState = {};
  if ( window.currentUser ) {
    preloadedState = bootstrapCurrentUser();
  }
  return preloadedState;
};

const bootstrapCurrentUser = () => {
  const preloadedState = {
    currentUser: window.currentUser
  };
  delete window.currentUser;
  return preloadedState;
};

const configureStore = () => {
  const middlewares = configureMiddlewares();
  const preloadedState = configurePreloadedState();
  return (
    createStore(
      RootReducer,
      preloadedState,
      applyMiddleware( ...middlewares )
    )
  );
};

export default configureStore;