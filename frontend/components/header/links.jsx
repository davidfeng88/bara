import React from 'react';
import { Link } from 'react-router-dom';


const Links = () => {
  return(
    <div>
      <Link to="/businesses/?name=&location=New%20York">Businesses</Link>
    </div>
  );
};

export default Links;
