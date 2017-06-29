import { connect } from 'react-redux';

import {
  createReview,
  editReview,
  deleteReview
} from '../../actions/business_actions';

import { clearErrors } from '../../actions/error_actions';

import {
  selectCurrentBusiness,
  selectCurrentReview,
} from '../../reducers/selectors';

import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.location.pathname.slice(-3) === 'new') {
    return {
      business: selectCurrentBusiness(state, state.reviews.currentBusiness),
      review: null,
      errors: state.errors,
    };
  } else {
    const review = selectCurrentReview(state,
      parseInt(ownProps.match.params.id));
    return {
      business: selectCurrentBusiness(state, review.business_id),
      review: review,
      errors: state.errors,
    };
  }
};

const mapDispatchToProps = ( dispatch, { location } ) => {
  const formType = location.pathname.slice(-3) !== 'new' ? "edit" : "create";
  const processForm = (formType === "edit") ? editReview : createReview;
  return {
    processForm: review => dispatch(processForm(review)),
    formType,
    clearErrors: () => dispatch(clearErrors()),
    deleteReview: (id) => dispatch(deleteReview(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
