import { connect } from 'react-redux';
import { fetchAllBusinesses } from '../../actions/business_actions';
import { businessesToArray } from '../../reducers/selectors';
import BusinessIndex from './business_index';

const mapStateToProps = state => ({
  businesses: businessesToArray(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllBusinesses: () => dispatch(fetchAllBusinesses())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
