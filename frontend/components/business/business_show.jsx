import React from 'react';
import { Link } from 'react-router-dom';

class BusinessShow extends React.Component {
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
    return(
      <div>
        <div className='business-show-title'>
          <div className='center'>
            <h1>{business.name}</h1>
            <div className='business-show-title-row1'>


              <div className='business-show-title-col'>
                Reviews Info goes here<br/>
                {this.price(business.price)}  •  Business Tags<br/>
              </div>

              <div className='business-show-title-col'>
                Write a review button<br/>
              </div>
            </div>

            <div className='business-show-title-row2'>
              <div className='info'>
                <div className='show-map'>
                  the static show map goes here
                </div>
                <div className='text-info'>
                  {business.address}<br/>
                  {`${business.city}, ${business.state} ${business.zipcode}`}<br/>
                  {business.phone}<br/>
                  {business.url}<br/>
                  Edit Business Link here
                </div>
              </div>

              <div className='pictures'>
                <img src={business.image_url} />
                <img src={business.image_url} />
                <img src={business.image_url} />
              </div>
            </div>
          </div>

        </div>




      </div>
    );

  }
}


export default BusinessShow;
