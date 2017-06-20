import React from 'react';

const ErrorList = ({ errors }) => {
  if (errors.length === 0) return null;
  const errorItems = JSON.parse(errors).map((error, idx) => (
    <li key={ `error-${idx}` }>{ error }</li>
  ));

  return (
    <ul className="error-list">
      { errorItems }
    </ul>
  );
};

export default ErrorList;
