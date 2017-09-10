import React from 'react';
import {
  Link
} from 'react-router-dom';

const SessionHeader = () => (
  <div className='session-header'>
    <div className='small-logo'>
      <Link to="/">
        <img src={window.staticImages.headerLogo} />
      </Link>
    </div>
  </div>
);

export default SessionHeader;
