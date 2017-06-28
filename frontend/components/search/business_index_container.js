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

// Note: this file was imported to the App.jsx before the search/filter feature.
// In the search file, business-index (not the container) was rendered.
