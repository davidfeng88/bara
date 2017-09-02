import React from 'react';
import { Link } from 'react-router-dom';

const HomeLinks = () => (
  <div className='home-header-links'>
      <span className='home-header-link'>
      <i className="fa fa-cutlery" aria-hidden="true"></i>
      <Link to="/businesses/?name=&location=New%20York">
        Restaurants
      </Link>
      </span>
      <span className='home-header-link'>
      <i className="fa fa-glass" aria-hidden="true"></i>
      <Link to="/businesses/?name=&location=New%20York&tag=nightlife">
        Nightlife
      </Link>
      </span>
  </div>
);

export default HomeLinks;
