import React from 'react';
import { Link } from 'react-router-dom';


const Links = () => (
  <div className='business-header-links'>
    <Link to="/businesses/?name=&location=New%20York">
    <i className="fa fa-cutlery" aria-hidden="true"></i>&nbsp;&nbsp;
      Restaurants
    </Link>


  </div>
);

export default Links;

// <Link to="/businesses/?name=&location=New%20York">
// <i className="fa fa-glass" aria-hidden="true"></i>&nbsp;&nbsp;
//   Nightlife
// </Link>
