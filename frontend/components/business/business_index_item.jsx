import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  price(number) {
    switch (number) {
      case 1:
        return '$';
      case 2:
        return '$$';
      case 3:
        return '$$$';
      case 4:
        return '$$$$';
    }
  }

  render() {
    const { business } = this.props;
    return (
      <div className='index-item'>

        <div className='index-item-row1'>

          <div className='index-pic'>
            <img src={business.image_url} />
          </div>

          <div className='index-li'>
            <div className='col1'>
              <li>
                <Link to={`/businesses/${business.id}`}>{business.name}</Link>
              </li>
              Reviews Info goes here<br/>
              {this.price(business.price)}  •  Business Tags<br/>
            </div>

            <div className='col2'>
              {business.address}<br/>
              {`${business.city}, ${business.state} ${business.zipcode}`}<br/>
              {business.phone}<br/>
            </div>

          </div>

        </div>

        <div className='index-item-row2'>
          Top review for this business goes here
        </div>
      </div>
    );
  }

}

export default BusinessIndexItem;
