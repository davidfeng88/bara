import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../home/home';
import {
  Provider,
} from 'react-redux';

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider store={store}><Home /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
