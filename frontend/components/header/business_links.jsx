import React from 'react';
import { Link } from 'react-router-dom';

const BusinessHeaderLinks = () => (
  <div className='business-header-links'>
    <Link to="/businesses/?name=&location=New%20York">
    <i className="fa fa-cutlery" aria-hidden="true"></i>&nbsp;&nbsp;
      Restaurants
    </Link>
    <Link to="/businesses/?name=&location=New%20York&tag=nightlife">
    <i className="fa fa-glass" aria-hidden="true"></i>&nbsp;&nbsp;
      Nightlife
    </Link>
  </div>
);

export default BusinessHeaderLinks;
