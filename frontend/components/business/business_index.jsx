import React from 'react';
import { Link } from 'react-router-dom';

// import BusinessHeaderContainer from './business_header_container';
import BusinessIndexItem from './business_index_item';

class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllBusinesses();
  }

  render() {
    const businessesEntries = this.props.businesses.map(business => (
        <BusinessIndexItem key={ business.id } business={ business } />
      )
    );

    return(
      <div>

        <h1>All Businesses!</h1>
        <div className='col'>
          <ul className="business-index">
            { businessesEntries }
          </ul>
        </div>
        <Link to='/businesses/new'>Add Business</Link>
      </div>
    );
  }

}

export default BusinessIndex;
        // <BusinessHeaderContainer />
