import React from 'react';
import { Link } from 'react-router-dom';

const SessionHeader = () => {
  return(
    <div className='session-header'>
      <div className='session-header-logo'>
        <Link to="/">
        <img src={window.staticImages.headerLogo} />
        </Link>
      </div>
    </div>
  );
};

export default SessionHeader;
