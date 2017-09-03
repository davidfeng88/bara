import { connect } from 'react-redux';
import { selectCurrentBusiness } from '../../reducers/selectors';
import { fetchBusiness } from '../../actions/business_actions';

import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => ({
  business: selectCurrentBusiness(state, parseInt(ownProps.match.params.id)),
});

const mapDispatchToProps = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
