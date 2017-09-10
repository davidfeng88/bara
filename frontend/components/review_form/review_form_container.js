import {
  connect
} from 'react-redux';
// TODO use AJAX actions
// import {
//   createReview,
//   editReview,
//   deleteReview
// } from '../../actions/business_actions';

// TODO: handle errors locally!

import ReviewForm from './review_form';

const mapStateToProps = ( state, ownProps ) => {
  if ( ownProps.location.pathname.slice( -3 ) === 'new' ) {
    return {
      // business: selectCurrentBusiness(state, state.reviews.currentBusiness),
      review: null,
      // errors: state.errors,
    };
  } else {
    // const review = selectCurrentReview(state,
    //   parseInt(ownProps.match.params.id));
    return {
      // business: selectCurrentBusiness(state, review.business_id),
      // review: review,
      // errors: state.errors,
    };
  }
};

const mapDispatchToProps = ( dispatch, {
  location
} ) => {
  const formType = location.pathname.slice( -3 ) !== 'new' ? "edit" : "create";
  // const processForm = (formType === "edit") ? editReview : createReview;
  return {
    // processForm: review => dispatch(processForm(review)),
    formType,
    // deleteReview: (id) => dispatch(deleteReview(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( ReviewForm );
