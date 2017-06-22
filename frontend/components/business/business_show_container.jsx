import React from 'react';
import { Link } from 'react-router-dom';

import BusinessHeaderContainer from './business_header_container';

const BusinessShowContainer = () => {
  return(
    <div>
      <BusinessHeaderContainer />
      <p> this is a business show page!! </p>
      <Link to='/businesses'> back to all businesses </Link>
    </div>
  );
};

export default BusinessShowContainer;
