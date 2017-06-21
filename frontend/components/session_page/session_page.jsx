import React from 'react';

import SessionHeader from './session_header';
import SessionFormContainer from './session_form_container';

const SessionPage = () => {
  return(
    <div>
      <SessionHeader />
      <div className='page-main'>
        <div className='container'>

          <div className='col-1-2'>
            <SessionFormContainer />
          </div>

          <div className='col-1-2 session-pic'>
            <img src={window.staticImages.sessionPic} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SessionPage;
