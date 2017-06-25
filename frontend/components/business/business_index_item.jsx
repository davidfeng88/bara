import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = ({ business }) => {
  return(
    <li>
      <Link to={`/businesses/${business.id}`}>{business.name}</Link>
      <img src={business.image_url} />
      <p>{business.address}</p>
      <p>{`${business.city}, ${business.state} ${business.zipcode}`}</p>
      <p>{business.phone}</p>
    </li>
  );
};

export default BusinessIndexItem;
