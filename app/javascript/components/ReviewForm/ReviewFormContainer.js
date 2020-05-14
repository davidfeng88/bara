import { connect } from 'react-redux';

import ReviewForm from './ReviewForm';

const mapStateToProps = (state, ownProps) => {
  const formType =
    ownProps.location.pathname.slice(-3) === 'new' ?
      'createReview' : 'editReview';

  return ({
    currentUser: state.currentUser,
    formType,
  });
};

export default connect(
  mapStateToProps,
  null,
)(ReviewForm);
