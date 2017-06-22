import { connect } from 'react-redux';
// import { fetchBusiness } from '../../actions/business_actions';

import { withRouter } from 'react-router-dom';

import { selectCurrentBusiness } from '../../reducers/selectors';
import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => ({
  business: selectCurrentBusiness(state, ownProps.match.params.id)
});

const mapDispatchToProps = dispatch => ({

});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow));
