import { connect } from 'react-redux';
// import { fetchBusiness } from '../../actions/business_actions';

import { withRouter } from 'react-router-dom';

import { selectCurrentBusiness } from '../../reducers/selectors';
import { fetchBusiness } from '../../actions/business_actions';

import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => ({
  business: selectCurrentBusiness(state)
});

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
