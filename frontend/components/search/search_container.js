import { connect } from 'react-redux';
import queryString from 'query-string';
import { updateFilter } from '../../actions/filter_actions';
import { businessesToArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = (state, ownProps) => {

  let name = "";
  let location = "";
  let prices = [];
  if (ownProps.location.search !== "") {
    const parsed = queryString.parse(
      ownProps.location.search, {arrayFormat: 'bracket'});
    name = parsed.name;
    location = parsed.location;
    prices = parsed.prices;
  }
  let filters = {
    name,
    location,
    prices,
  };
  return({
    businesses: businessesToArray(state),
    filters,
  });
};

const mapDispatchToProps = dispatch => ({
  updateFilter: (filters) => dispatch(updateFilter(filters)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
