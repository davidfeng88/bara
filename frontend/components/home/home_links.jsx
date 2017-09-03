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
      <p>Search Example:&nbsp;
        <Link to="/businesses/?name=burger&location=19th%20St">
          find "burger" near "19th St"
        </Link>
      </p>
      <p>
        Click on bara logo for new random featured businesses
      </p>
  </div>
);

export default HomeLinks;
