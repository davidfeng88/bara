import { connect } from 'react-redux';
import { selectCurrentBusiness } from '../../reducers/selectors';
import { clearErrors } from '../../actions/error_actions';
import { fetchBusiness } from '../../actions/business_actions';

import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => ({
  business: selectCurrentBusiness(state, parseInt(ownProps.match.params.id)),
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
