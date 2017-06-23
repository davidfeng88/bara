import React from 'react';

const ErrorList = ({ errors }) => {
  if (errors.length === 0) return null;
  const errorItems = JSON.parse(errors).map((error, idx) => (
    <li key={ `error-${idx}` }>{ error }</li>
  ));

  return (
    <div className="error-list">
      <ul >
        { errorItems }
      </ul>
      <div className='dismiss-error'>
      X
      </div>
    </div>
  );
};

export default ErrorList;
