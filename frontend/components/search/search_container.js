import { connect } from 'react-redux';
import { highlightBusiness } from '../../actions/highlight_actions';
import Search from './search';

const mapDispatchToProps = dispatch => ({
  highlightBusiness: id => dispatch(highlightBusiness(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Search);
