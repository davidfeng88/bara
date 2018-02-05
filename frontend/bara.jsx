import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

const renderReactRoot = () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
};

document.addEventListener('DOMContentLoaded', renderReactRoot);
