import React from 'react';
import { Link } from 'react-router-dom';

const FourZeroFour = () => (
  <div className='four-zero-four center'>
    <h1><strong>404 error.</strong>
      &nbsp;The page you’re looking for cannot be found.</h1>
    <Link to="/" className='link-as-button'>
      Go Home
    </Link>
  </div>
);

export default FourZeroFour;
