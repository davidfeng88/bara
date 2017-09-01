import React from 'react';
import { Link } from 'react-router-dom';

import BusinessIndexItemContainer from './business_index_item_container';
import IndexMapContainer from './index_map_container';

class BusinessIndex extends React.Component {

  render() {
    let { businesses } = this.props;
    let businessesEntries = businesses.length === 0 ? (
      <h3>Sorry, nothing matched your search!</h3>
    ) : (
      businesses.map( business =>
        <BusinessIndexItemContainer key={business.id} business={business} />
      )
    );
    return(
      <div className='business-index-main'>
        <div className='center index-grid-row1'>
          <div className='index-grid-col1'>
            <ol className="business-index">
              { businessesEntries }
            </ol>
          </div>
          <div className='index-grid-col2'>
            <div className='css-sticky'>
             <IndexMapContainer businesses={businesses} />
            </div>
          </div>
        </div>

        <div className='center index-grid-row2'>
          <div className='add-business'>
            <h3>Not here? Tell us what we're missing.</h3>
            <p>If the business you're looking for isn't here, add it!</p>
            <div className='add-business-link'>
              <Link to='/businesses/new'>Add A Business</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default BusinessIndex;
