import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../footer';

window.staticImages = {
  footerPic: '',
};

it('renders Footer correctly', () => {
  const tree = renderer
    .create(<Footer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
