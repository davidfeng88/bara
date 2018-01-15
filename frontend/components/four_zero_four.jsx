import React from 'react';
import {
  Link
} from 'react-router-dom';

const FourZeroFourMessage = () => (
  <h1><strong>404 error.</strong>
    &nbsp;The page you’re looking for cannot be found.</h1>
);

const GoHomeLink = () => (
  <Link to="/" className='link-as-button'>
    Go Home
  </Link>
);

const FourZeroFour = () => (
  <div className='four-zero-four center'>
    <FourZeroFourMessage />
    <GoHomeLink />
  </div>
);

export default FourZeroFour;