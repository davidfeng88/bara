import {
  createStore,
  applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer';

const addReduxLoggerToMiddleware = (middlewares) => {
  middlewares.push(createLogger());
};

const configureMiddlewares = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    addReduxLoggerToMiddleware(middlewares);
  }
  return middlewares;
};

const bootstrapCurrentUser = () => {
  const preloadedState = {
    currentUser: window.currentUser,
  };
  delete window.currentUser;
  return preloadedState;
};

const configurePreloadedState = () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = bootstrapCurrentUser();
  }
  return preloadedState;
};

const configureStore = () => {
  const middlewares = configureMiddlewares();
  const preloadedState = configurePreloadedState();
  return (
    createStore(
      RootReducer,
      preloadedState,
      applyMiddleware(...middlewares),
    )
  );
};

export default configureStore;
