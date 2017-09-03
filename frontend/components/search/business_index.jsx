import React from 'react';
import BusinessIndexItemContainer from './business_index_item_container';

const BusinessIndex = ({ businesses }) => {
  let businessesEntries = businesses.length === 0 ? (
    <h3>Sorry, nothing matched your search!</h3>
  ) : (
    businesses.map( business =>
      <BusinessIndexItemContainer key={business.id} business={business} />)
  );
  return(
    <ol className="business-index">
      { businessesEntries }
    </ol>
  );
};

export default BusinessIndex;
