import { connect } from 'react-redux';
import { updateFilter, resetFilter } from '../../actions/filter_actions';
import { businessesToArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = (state, ownProps) => {

  // const queryString = require('query-string');
  // const parsed = queryString.parse(ownProps.location.search);
  // console.log(`parsed=${parsed}`);
  return({
    businesses: businessesToArray(state),
    minPrice: state.filters.minPrice,
    maxPrice: state.filters.maxPrice
  });
};


const mapDispatchToProps = dispatch => ({
  updateFilter: (filters) => dispatch(updateFilter(filters)),
  resetFilter: () => dispatch(resetFilter())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
