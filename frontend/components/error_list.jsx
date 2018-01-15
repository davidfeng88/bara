import React from 'react';

const ErrorItems = ( {
  errors
} ) => (
  <ul>
    {errors.map(
      ( error, idx ) => ( <li key={ `error-${idx}` }>{ error }</li> )
    )}
  </ul>
);

const DismissBotton = ( {
  clearErrors
} ) => (
  <div onClick={clearErrors} className='dismiss-error'>
  ×
  </div>
);

const ErrorList = ( {
  errors,
  clearErrors
} ) => {
  if ( errors.length === 0 ) {
    return null;
  } else {
    return (
      <div className="error-list">
        <ErrorItems errors={errors} />
        <DismissBotton clearErrors={clearErrors} />
      </div>
    );
  }
};

export default ErrorList;