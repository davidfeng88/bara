import React from 'react';
import BusinessIndexItemContainer from './BusinessIndexItemContainer';

const BusinessIndex = ({
  businesses,
}) => {
  const businessesEntries = businesses.length === 0 ? (
    <h3>Sorry, nothing matched your search!</h3>
  ) : (
    businesses.map(business =>
      <BusinessIndexItemContainer key={business.id} business={business} />)
  );
  return (
    <ol className="business-index">
      { businessesEntries }
    </ol>
  );
};

export default BusinessIndex;
