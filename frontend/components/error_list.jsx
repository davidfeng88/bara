import React from 'react';

const errorItems = errors => (
  JSON.parse(errors).map(
    (error, idx) => (<li key={ `error-${idx}` }>{ error }</li>)
  )
);

const ErrorList = ({ errors, clearErrors }) => (
  errors.length === 0 ? null : (
    <div className="error-list">
      <ul>{errorItems(errors)}</ul>
      <div onClick={clearErrors} className='dismiss-error'>
      ×
      </div>
    </div>
  )
);

export default ErrorList;
