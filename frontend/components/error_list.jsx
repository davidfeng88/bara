import React from 'react';
import PropTypes from 'prop-types';

const ErrorList = ({
  errors,
  clearErrors,
}) => {
  if (errors.length === 0) {
    return null;
  }
  return (
    <div className="error-list">
      <ErrorItems errors={errors} />
      <DismissBotton clearErrors={clearErrors} />
    </div>
  );
};

export default ErrorList;

ErrorList.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const ErrorItems = ({
  errors,
}) => (
  <ul>
    {errors.map(error => (<li key={error.length}>{error}</li>))}
  </ul>
);

ErrorItems.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const DismissBotton = ({
  clearErrors,
}) => (
  <div
    onClick={clearErrors}
    onKeyPress={clearErrors}
    className="dismiss-error"
    role="button"
    tabIndex={0}
  >
  ×
  </div>
);

DismissBotton.propTypes = {
  clearErrors: PropTypes.func.isRequired,
};
