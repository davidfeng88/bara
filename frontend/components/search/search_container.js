import { connect } from 'react-redux';
import queryString from 'query-string';
import Search from './search';

const mapStateToProps = (state, ownProps) => {

  let name = "";
  let location = "";
  let prices = [];
  let tag = "";
  if (ownProps.location.search !== "") {
    const parsed = queryString.parse(
      ownProps.location.search, {arrayFormat: 'bracket'});
    name = parsed.name ? parsed.name : "";
    location = parsed.location ? parsed.location : "";
    tag = parsed.tag ? parsed.tag : "";
    prices = parsed.prices;
  }
  let filters = {
    name,
    location,
    prices,
    tag,
  };
  return({
    filters,
  });
};

export default connect(
  mapStateToProps,
  null
)(Search);
