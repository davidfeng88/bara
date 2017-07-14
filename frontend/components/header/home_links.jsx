import React from 'react';
import { Link } from 'react-router-dom';


const Links = () => {
  return(
    <div className='home-header-links'>
        <i className="fa fa-cutlery" aria-hidden="true"></i>&nbsp;&nbsp;
        <Link to="/businesses/?name=&location=New%20York">
          Restaurants
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="fa fa-cutlery" aria-hidden="true"></i>&nbsp;&nbsp;
        <Link to="/businesses/?name=&location=New%20York">
          Restaurants
        </Link>
    </div>
  );
};

export default Links;
