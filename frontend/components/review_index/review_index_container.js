import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  selectCurrentBusiness,
  reviewsToArray
} from '../../reducers/selectors';

import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => {
  const business =
    selectCurrentBusiness(state, parseInt(ownProps.match.params.id));
  return {
    business: business,
    reviews: reviewsToArray(state, business),
    currentUser: state.currentUser
  };

};

export default withRouter(connect(
  mapStateToProps,
  null
)(ReviewIndex));
