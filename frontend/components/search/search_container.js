import { connect } from 'react-redux';
import { updateFilter, resetFilter } from '../../actions/filter_actions';
import { businessesToArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = (state, ownProps) => {

  const queryString = require('query-string');
  let name = "";
  let location = "";
  if (ownProps.location.search !== "") {
    const parsed = queryString.parse(ownProps.location.search);
    name = parsed.name;
    location = parsed.location;
  }
  let filters = {
    name,
    location,
  };
  return({
    businesses: businessesToArray(state),
    filters,
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
