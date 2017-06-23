import React from 'react';

const ErrorList = ({ errors, clearErrors }) => {
  if (errors.length === 0) return null;
  const errorItems = JSON.parse(errors).map((error, idx) => (
    <li key={ `error-${idx}` }>{ error }</li>
  ));

  return (
    <div className="error-list">
      <ul >
        { errorItems }
      </ul>
      <div onClick={clearErrors} className='dismiss-error'>
      ×
      </div>
    </div>
  );
};

export default ErrorList;
