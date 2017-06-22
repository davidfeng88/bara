import React from 'react';
import { Link } from 'react-router-dom';

import BusinessHeaderContainer from './business_header_container';

const BusinessShow = ({ business }) => {
  return(
    <div>
      <BusinessHeaderContainer />
      <Link to={`/businesses/${business.id}`}>{business.name}</Link>
      <p>{business.address}</p>
      <p>{`${business.city}, ${business.state} ${business.zipcode}`}</p>
      <p>{business.phone}</p>
      <Link to='/businesses'> back to all businesses </Link>
    </div>
  );
};

export default BusinessShow;
