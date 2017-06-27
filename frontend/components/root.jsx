import React from 'react';
import AppContainer from './app_container';
import {Provider} from 'react-redux';
import { HashRouter } from 'react-router-dom';

const Root = ( {store} ) => (
    <Provider store={store}>
      <HashRouter>
        <AppContainer />
      </HashRouter>
    </Provider>
);

export default Root;
