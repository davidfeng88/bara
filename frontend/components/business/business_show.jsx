import React from 'react';
import { Link } from 'react-router-dom';

const BusinessShow = ({ business }) => {
  return(
    <div>

      <Link to={`/businesses/${business.id}`}>{business.name}</Link>
      <p>{business.address}</p>
      <p>{`${business.city}, ${business.state} ${business.zipcode}`}</p>
      <p>{business.phone}</p>
      <Link to='/businesses'> back to all businesses </Link>
    </div>
  );
};

export default BusinessShow;
