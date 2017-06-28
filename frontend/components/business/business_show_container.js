import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { selectCurrentBusiness } from '../../reducers/selectors';
import { fetchBusiness } from '../../actions/business_actions';

import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => {
  return {
    business: selectCurrentBusiness(state, parseInt(ownProps.match.params.id)),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBusiness: (id) => {
      return dispatch( fetchBusiness(id) );
    }
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow));
