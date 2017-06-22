import React from 'react';
import { Link } from 'react-router-dom';


const LinksContainer = () => {
  return(
    <div>
      The links goes here <Link to="/businesses">Businesses</Link>
    </div>
  );
};


export default LinksContainer;
