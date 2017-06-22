import React from 'react';
import { Link } from 'react-router-dom';

const BusinessShowContainer = () => {
  return(
    <div>
      <p> this is a business show page!! </p>
      <Link to='/businesses'> back to all businesses </Link>
    </div>
  );
};

export default BusinessShowContainer;
